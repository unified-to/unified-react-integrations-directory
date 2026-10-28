import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, waitFor } from '@testing-library/react';
import UnifiedDirectory from '../src/UnifiedReactDirectory';

// What the workspace integrations endpoint returns; the mock records the request URL
const INTEGRATIONS = [
    { type: 'hubspot', name: 'HubSpot', categories: ['crm', 'martech'], logo_url: '/hubspot.png' },
    { type: 'greenhouse', name: 'Greenhouse', categories: ['ats', 'hris'], logo_url: '/greenhouse.png' },
];

let requested: string[] = [];

async function renderDirectory(props: Partial<React.ComponentProps<typeof UnifiedDirectory>>) {
    const { container } = render(<UnifiedDirectory workspace_id="ws_123" {...props} />);
    await waitFor(() => expect(container.querySelectorAll('a.unified_vendor').length).toBe(INTEGRATIONS.length));
    const listUrl = new URL(requested[0]);
    const authUrls = [...container.querySelectorAll<HTMLAnchorElement>('a.unified_vendor')].map((a) => new URL(a.href));
    return { listUrl, authUrls };
}

describe('UnifiedDirectory categories and scopes (backward compatibility)', () => {
    beforeEach(() => {
        requested = [];
        vi.stubGlobal(
            'fetch',
            vi.fn(async (url: string) => {
                requested.push(url);
                return new Response(JSON.stringify(INTEGRATIONS), { status: 200 });
            })
        );
    });

    afterEach(() => {
        cleanup();
        vi.unstubAllGlobals();
    });

    test('without categories or scopes: no filter, and auth links request no scopes (unchanged)', async () => {
        const { listUrl, authUrls } = await renderDirectory({});
        expect(listUrl.searchParams.has('categories')).toBe(false);
        expect(authUrls.map((url) => url.pathname)).toEqual(['/unified/integration/auth/ws_123/hubspot', '/unified/integration/auth/ws_123/greenhouse']);
        expect(authUrls.every((url) => !url.searchParams.has('scopes'))).toBe(true);
    });

    test('with categories: filters by them (unchanged)', async () => {
        const { listUrl } = await renderDirectory({ categories: ['crm'] });
        expect(listUrl.searchParams.get('categories')).toBe('crm');
    });

    test('with scopes only: filters by the categories of the scopes and requests the scopes', async () => {
        const { listUrl, authUrls } = await renderDirectory({ scopes: ['crm_contact_read', 'martech_list_read', 'webhook'] });
        expect(listUrl.searchParams.get('categories')).toBe('crm,martech');
        expect(authUrls[0].searchParams.get('scopes')).toBe('crm_contact_read,martech_list_read,webhook');
    });

    test('with categories and scopes: categories win', async () => {
        const { listUrl, authUrls } = await renderDirectory({ categories: ['ats'], scopes: ['crm_contact_read'] });
        expect(listUrl.searchParams.get('categories')).toBe('ats');
        expect(authUrls[0].searchParams.get('scopes')).toBe('crm_contact_read');
    });
});

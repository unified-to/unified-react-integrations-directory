import React from 'react';

import { IIntegration, TIntegrationCategory } from '../models/Unified';

export interface UnifiedDirectoryProps {
    workspaceId: string;
    categories?: string[];
    external_xref?: string;
    state?: string;
    scopes?: string[];
    success_redirect?: string;
    failure_redirect?: string;
    nostyle?: boolean;
}

const API_URL = 'https://api.unified.to';
const CATEGORY_MAP = {
    crm: 'CRM',
    martech: 'Marketing Tech',
    ticketing: 'Support Tickets',
    // auth: 'Authentication',
    uc: 'Unified Communications',
    enrich: 'Enrichment',
    ats: 'Applicant Tracking System',
    hris: 'HR Information System',
} as { [path in string]: string };

const UnifiedDirectory = async (props: UnifiedDirectoryProps) => {
    let INTEGRATIONS = [] as IIntegration[];
    let selectedCategory = undefined as TIntegrationCategory | undefined;
    let CATEGORIES = [] as TIntegrationCategory[];

    const filter = (integrations: IIntegration[]) => {
        return integrations?.filter((integration) => !selectedCategory || integration.categories.includes(selectedCategory)) || [];
    };

    const unified_get_auth_url = (integration: IIntegration) => {
        let url = `${API_URL}/unified/integration/auth/${props.workspaceId}/${integration.type}?redirect=1`;

        if (props.external_xref) {
            url += `&user_xref=${encodeURIComponent(props.external_xref)}`;
        }
        if (props.state) {
            url += `&state=${encodeURIComponent(props.state)}`;
        }
        if (props.scopes?.length) {
            url += `&scopes=${encodeURIComponent(props.scopes.join(','))}`;
        }
        // if (this.success_redirect) {
        url += `&success_redirect=${encodeURIComponent(props.success_redirect || window.location.href)}`;
        // }
        // if (this.failure_redirect) {
        url += `&failure_redirect=${encodeURIComponent(props.failure_redirect || window.location.href)}`;
        // }
        return url;
    };

    const unified_select_category = (category?: TIntegrationCategory) => {
        selectedCategory = category;
    };

    const load_data = async (url: string) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.json();
        } catch {
            return;
        }
    };

    const setup = async () => {
        selectedCategory = undefined;
        const url = `${API_URL}/unified/integration/workspace/${props.workspaceId}?summary=1${
            props.categories?.length ? '&categories=' + props.categories.join(',') : ''
        }`;

        INTEGRATIONS = ((await load_data(url)) || []) as IIntegration[];

        CATEGORIES = [];
        INTEGRATIONS.forEach((integration) => {
            integration.categories?.forEach((c) => {
                if (CATEGORY_MAP[c] && (!props.categories?.length || props.categories.includes(c))) {
                    CATEGORIES.push(c);
                }
            });
        });

        CATEGORIES = [...new Set(CATEGORIES)];

        if (CATEGORIES.length === 1) {
            CATEGORIES = [];
        } else {
            CATEGORIES = CATEGORIES.sort(function (a, b) {
                return a.localeCompare(b);
            });
        }

        if (!props.nostyle) {
            const link = document.createElement('link');
            link.href = `${API_URL}/docs/unified.css`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    };

    await setup();

    return (
        <div className="unified">
            {CATEGORIES.length > 0 && filter(INTEGRATIONS).length && (
                <div className="unified_menu">
                    <button className={'unified_button unified_button_all' + selectedCategory ? '' : ' active'} onClick={() => unified_select_category()}>
                        All
                    </button>
                    {CATEGORIES.map((cat) => (
                        <button
                            className={`unified_button unified_button_${cat} ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => unified_select_category(cat)}
                        >
                            {CATEGORY_MAP[cat]}
                        </button>
                    ))}
                </div>
            )}

            <div className="unified_vendors">
                {filter(INTEGRATIONS).map((integration) => (
                    <a href={unified_get_auth_url(integration)} className="unified_vendor">
                        <img src={`https://api.unified.to${integration.logo_url}`} className="unified_image" />
                        <div className="unified_vendor_inner">
                            <div className="unified_vendor_name">{integration.name}</div>
                            {integration.categories
                                .filter((c) => !CATEGORIES || CATEGORIES.indexOf(c) > -1)
                                .filter((c) => CATEGORY_MAP[c])
                                .map((cat) => (
                                    <div className="unified_vendor_cats">
                                        <span>{cat}</span>
                                    </div>
                                ))}
                        </div>
                    </a>
                ))}

                {filter(INTEGRATIONS).length === 0 && <div className="unified_vendor">No integrations available</div>}
            </div>
        </div>
    );
};

export default UnifiedDirectory;

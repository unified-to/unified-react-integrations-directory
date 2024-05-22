import React from 'react';
import { useState } from 'react';
import { TIntegrationCategory } from './models/Unified';

interface IIntegration {
    type: string; // Identifier for this integration
    name: string; // The integration's name
    categories: TIntegrationCategory[]; // The categories of support solutions that this integration has
    logo_url?: string; // The URL of the integration's logo
    color?: string; // button background color for AUTH
    text_color?: string; // text color for AUTH
}

const API_NA_URL = 'https://api.unified.to';
const API_EU_URL = 'https://api-eu.unified.to';

const CATEGORY_MAP: { [path in TIntegrationCategory]?: string } = {
    crm: 'CRM',
    martech: 'Marketing',
    ticketing: 'Ticketing',
    uc: 'Unified Communications',
    enrich: 'Enrichment',
    ats: 'ATS',
    hris: 'HR',
    accounting: 'Accounting',
    storage: 'Storage',
    commerce: 'E-Commerce',
    payment: 'Payments',
    genai: 'Generative AI',
    message: 'Messaging',
    kms: 'KMS',
} as { [path in TIntegrationCategory]?: string };

export interface UnifiedDirectoryProps {
    workspaceId?: string;
    workspace_id?: string;
    categories?: string[];
    external_xref?: string;
    state?: string;
    scopes?: string[];
    success_redirect?: string;
    failure_redirect?: string;
    nostyle?: boolean;
    environment?: string;
    lang?: string;
    notabs?: boolean;
    nocategories?: boolean;
    dc?: 'us' | 'eu'; // which data-center
}

export default function UnifiedDirectory(props: UnifiedDirectoryProps) {
    const API_URL = props.dc === 'eu' ? API_EU_URL : API_NA_URL;
    const [INTEGRATIONS, setIntegrations] = useState<IIntegration[]>([]);
    const [CATEGORIES, setCategories] = useState<TIntegrationCategory[]>([]);
    const [selectedCategory, setCategory] = useState<TIntegrationCategory | ''>('');
    const [loading, setLoading] = useState<boolean>(false);

    function filter(integrations: IIntegration[]) {
        return integrations?.filter((integration) => !selectedCategory || integration.categories.indexOf(selectedCategory) !== -1) || [];
    }

    function unified_get_auth_url(integration: IIntegration) {
        let url = `${API_URL}/unified/integration/auth/${props.workspaceId || props.workspace_id}/${integration.type}?redirect=1`;

        if (props?.external_xref) {
            url += `&external_xref=${encodeURIComponent(props.external_xref)}`;
        }
        if (props.state) {
            url += `&state=${encodeURIComponent(props.state)}`;
        }
        if (props.scopes?.length) {
            url += `&scopes=${encodeURIComponent(props.scopes.join(','))}`;
        }
        if (props.environment && props.environment !== 'Production') {
            url += `&env=${encodeURIComponent(props.environment)}`;
        }
        if (props.lang) {
            url += `&lang=${props.lang}`;
        }

        // if (this.success_redirect) {
        url += `&success_redirect=${encodeURIComponent(
            props.success_redirect || '' //|| window.location.href
        )}`;
        // }
        // if (this.failure_redirect) {
        url += `&failure_redirect=${encodeURIComponent(
            props.failure_redirect || '' //|| window.location.href
        )}`;
        // }
        return url;
    }

    async function load_data() {
        const url = `${API_URL}/unified/integration/workspace/${props.workspaceId || props.workspace_id}?summary=1${
            props.categories?.length ? '&categories=' + props.categories.join(',') : ''
        }${props.environment === 'Production' || !props.environment ? '' : '&env=' + encodeURIComponent(props.environment)}`;

        console.log('url', url);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(String(response.status));
            }

            return response.json();
        } catch {
            return [];
        }
    }

    if (!loading && !INTEGRATIONS?.length) {
        setLoading(true);
        load_data().then((data: IIntegration[]) => {
            data = data.filter((i) => !(i.categories.length === 1 && i.categories[0] === 'auth')) || [];
            setIntegrations(data);

            console.log('INTEGRATIONS.length', data.length);

            let _CATEGORIES = [] as TIntegrationCategory[];
            data.forEach((integration) => {
                integration.categories?.forEach((c) => {
                    if (CATEGORY_MAP[c] && (!props.categories?.length || props.categories.indexOf(c) !== -1)) {
                        _CATEGORIES!.push(c);
                    }
                });
            });

            _CATEGORIES = [...new Set(_CATEGORIES)];

            if (_CATEGORIES.length === 1) {
                _CATEGORIES = [];
            } else {
                _CATEGORIES = _CATEGORIES.sort(function (a, b) {
                    return a.localeCompare(b);
                });
            }
            console.log('categories', _CATEGORIES);
            setCategories(_CATEGORIES);

            setLoading(false);
        });
    }

    return (
        <div className="unified">
            {!props.nostyle && <style>@import url(https://api.unified.to/docs/unified.css)</style>}
            {!props.notabs && CATEGORIES && CATEGORIES?.length > 0 && filter(INTEGRATIONS).length && (
                <div className="unified_menu">
                    <button className={`unified_button unified_button_all ${selectedCategory ? '' : ' active'}`} onClick={() => setCategory('')}>
                        All
                    </button>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            className={`unified_button unified_button_${cat} ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setCategory(cat)}
                        >
                            {CATEGORY_MAP[cat]}
                        </button>
                    ))}
                </div>
            )}

            <div className="unified_vendors">
                {filter(INTEGRATIONS).map((integration) => (
                    <a key={integration.type} href={unified_get_auth_url(integration)} className="unified_vendor">
                        <img alt={integration.name} src={integration.logo_url} className="unified_image" />
                        <div className="unified_vendor_inner">
                            <div className="unified_vendor_name">{integration.name}</div>
                            {!props.nocategories &&
                                integration.categories
                                    .filter((c) => !CATEGORIES || CATEGORIES.indexOf(c) > -1)
                                    .filter((c) => CATEGORY_MAP[c])
                                    .map((cat) => (
                                        <div key={cat} className="unified_vendor_cats">
                                            <span>{CATEGORY_MAP[cat]}</span>
                                        </div>
                                    ))}
                        </div>
                    </a>
                ))}
                {filter(INTEGRATIONS).length === 0 && <div className="unified_vendor">No integrations available</div>}
            </div>
        </div>
    );
}

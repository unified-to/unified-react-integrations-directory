export declare const ApiCallType: readonly ["webhook", "inbound"];
export type TApiCallType = typeof ApiCallType[number];
export declare const IntegrationAuthType: readonly ["oauth1", "oauth2", "other", "token"];
export type TIntegrationAuthType = typeof IntegrationAuthType[number];
export declare const IntegrationCategory: readonly ["passthrough", "hris", "ats", "auth", "crm", "enrich", "martech", "ticketing", "uc"];
export type TIntegrationCategory = typeof IntegrationCategory[number];
export declare const IntegrationPermission: readonly ["auth_login", "crm_company_read", "crm_company_write", "crm_contact_read", "crm_contact_write", "crm_deal_read", "crm_deal_write", "crm_event_read", "crm_event_write", "crm_user_read", "crm_user_write", "crm_lead_read", "crm_lead_write", "crm_file_read", "crm_file_write", "crm_pipeline_read", "crm_pipeline_write", "crm_team_read", "crm_team_write", "martech_list_read", "martech_list_write", "martech_member_read", "martech_member_write", "ticketing_agent_read", "ticketing_agent_write", "ticketing_customer_read", "ticketing_customer_write", "ticketing_ticket_read", "ticketing_ticket_write", "ticketing_note_read", "ticketing_note_write", "hris_employee_read", "hris_employee_write", "hris_group_read", "hris_group_write", "ats_candidate_read", "ats_candidate_write", "ats_interview_read", "ats_interview_write", "ats_job_read", "ats_job_write", "webhook"];
export type TIntegrationPermission = typeof IntegrationPermission[number];
export declare const IntegrationSupportWebhookType: readonly ["native", "virtual", "none"];
export type TIntegrationSupportWebhookType = typeof IntegrationSupportWebhookType[number];
export declare const ObjectType: readonly ["hris_employee", "hris_group", "uc_call", "uc_agent", "ticketing_customer", "ticketing_agent", "ticketing_ticket", "ats_interview", "ats_job", "ats_candidate", "ats_document", "crm_company", "crm_contact", "crm_deal", "crm_event", "crm_lead", "crm_file", "crm_pipeline", "crm_user", "crm_team", "martech_list", "martech_member"];
export type TObjectType = typeof ObjectType[number];
export declare const WebhookEvent: readonly ["updated", "created"];
export type TWebhookEvent = typeof WebhookEvent[number];
export interface IApiCall {
    readonly id?: string;
    readonly created_at?: string | Date;
    workspace_id: string;
    integration_type: string;
    external_xref?: string;
    name: string;
    path: string;
    size?: number;
    status: string;
    error?: string;
    connection_id: string;
    ip_address?: string;
    type: TApiCallType;
    method: string;
}
export interface IConnection {
    readonly id?: string;
    readonly created_at?: string | Date;
    readonly updated_at?: string | Date;
    readonly workspace_id: string;
    integration_type: string;
    external_xref?: string;
    permissions: TIntegrationPermission[];
    categories: TIntegrationCategory[];
    auth?: IConnectionAuth;
    is_paused?: boolean;
    auth_aws_arn?: string;
}
export interface IConnectionAuth {
    token?: string;
    access_token?: string;
    refresh_token?: string;
    expiry_date?: string | Date;
    expires_in?: number;
    emails?: string[];
    name?: string;
    app_id?: string;
    client_id?: string;
    client_secret?: string;
    consumer_key?: string;
    consumer_secret?: string;
    meta?: unknown;
    state?: string;
    other_auth_info?: string[];
    api_url?: string;
    authorize_url?: string;
    token_url?: string;
    pem?: string;
    key?: string;
}
export interface IIntegration {
    type: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    name: string;
    is_active?: boolean;
    categories: TIntegrationCategory[];
    api_docs_url?: string;
    logo_url?: string;
    auth_types: TIntegrationAuthType[];
    in_progress: boolean;
    color?: string;
    text_color?: string;
    fa_icon?: string;
    token_names?: string[];
    token_instructions?: string[];
    web_url?: string;
    rate_limit_description?: string;
    oauth?: IIntegrationOauth;
    beta?: boolean;
    support: {
        [path in string]?: IIntegrationSupport;
    };
}
export interface IIntegrationOauth {
    oauth_credentials_url?: string;
    scopes?: {
        [path in TIntegrationPermission]?: string[];
    };
    scopes_array?: TIntegrationPermission[];
    has_unified_oauth2_credentials?: boolean;
    client_id?: string;
    client_secret?: string;
    needs_apiurl?: boolean;
    needs_tokenurl?: boolean;
    needs_authorizeurl?: boolean;
    needs_pem?: boolean;
    needs_key?: boolean;
}
export interface IIntegrationSupport {
    methods?: {
        [path in string]?: boolean;
    };
    list_sort_by_name?: boolean;
    list_sort_by_created_at?: boolean;
    list_sort_by_updated_at?: boolean;
    list_updated_gte?: boolean;
    list_agent_id?: boolean;
    list_customer_id?: boolean;
    list_company_id?: boolean;
    list_contact_id?: boolean;
    list_application_id?: boolean;
    list_deal_id?: boolean;
    list_order?: boolean;
    list_query?: boolean;
    list_limit?: boolean;
    list_offset?: boolean;
    search_twitter?: boolean;
    search_name?: boolean;
    search_linkedin_url?: boolean;
    search_email?: boolean;
    search_domain?: boolean;
    inbound_fields?: {
        [path in string]?: boolean;
    };
    outbound_fields?: {
        [path in string]?: boolean;
    };
    webhook_type?: TIntegrationSupportWebhookType;
    webhooks_events?: TWebhookEvent[];
}
export interface IInvoice {
    stripe_id: string;
    created_at: string | Date;
    amount: number;
    connections: number;
    plan: string;
}
export interface INotification {
    readonly id?: string;
    readonly created_at?: string | Date;
    readonly workspace_id?: string;
    title: string;
    description?: string;
    icon?: string;
    link_url?: string;
}
export interface IPermission {
    readonly can_create_org: boolean;
    readonly can_leave_org: boolean;
    readonly can_downgrade: boolean;
    readonly can_invite: boolean;
    readonly can_update_org: boolean;
    readonly can_add_and_remove_admin: boolean;
    readonly can_accept_invite: boolean;
    readonly can_reject_invite: boolean;
    readonly can_pay: boolean;
    readonly can_get_invoices: boolean;
    readonly is_admin: boolean;
}
export interface IPlan {
    name: string;
    description?: string;
    max_connections?: number;
    stripe_product_id?: string;
    stripe_plan_id?: string;
    min_price?: number;
    price_per_mille_requests?: number;
    custom_oauth?: boolean;
    max_requests?: number;
}
export interface IUser {
    readonly id?: string;
    readonly created_at?: string | Date;
    readonly updated_at?: string | Date;
    name: string;
    readonly email: string;
    workspace_id: string;
    workspace_ids: string[];
}
export interface IWebhook {
    readonly id?: string;
    readonly created_at?: string | Date;
    workspace_id: string;
    connection_id: string;
    hook_url: string;
    events: TWebhookEvent[];
    object_type: TObjectType;
    interval: number;
    readonly checked_at: string | Date;
    integration_type: string;
    subscriptions?: string[];
}
export interface IWorkspace {
    readonly id?: string;
    readonly created_at?: string | Date;
    readonly updated_at?: string | Date;
    name: string;
    readonly admin_ids?: string[];
    readonly invited_emails?: string[];
    readonly pay_user_id?: string;
    readonly plan?: string;
    readonly stripe_customer?: string;
    readonly stripe_subscription?: string;
    readonly secret?: string;
    readonly integrations?: IWorkspaceIntegration[];
    ip_addresses?: string[];
    aws_region?: string;
    aws_key?: string;
    aws_secret?: string;
    datadog_apikey?: string;
}
export interface IWorkspaceIntegration {
    integration_type: string;
    client_id?: string;
    client_secret?: string;
    consumer_key?: string;
    consumer_secret?: string;
    is_active: boolean;
    api_url?: string;
    authorize_url?: string;
    token_url?: string;
    pem?: string;
    key?: string;
}
export declare const Plans: IPlan[];

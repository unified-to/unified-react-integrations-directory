export declare const ApiCallType: readonly ["login", "webhook", "inbound"];
export type TApiCallType = typeof ApiCallType[number];
export declare const IntegrationAuthType: readonly ["oauth1", "oauth2", "other", "token"];
export type TIntegrationAuthType = typeof IntegrationAuthType[number];
export declare const IntegrationCategory: readonly ["passthrough", "hris", "ats", "auth", "crm", "enrich", "martech", "ticketing", "uc", "accounting", "storage", "commerce", "payment", "genai"];
export type TIntegrationCategory = typeof IntegrationCategory[number];
export declare const IntegrationPermission: readonly ["auth_login", "accounting_account_read", "accounting_account_write", "accounting_transaction_read", "accounting_transaction_write", "accounting_invoice_read", "accounting_invoice_write", "accounting_contact_read", "accounting_contact_write", "accounting_taxrate_read", "accounting_taxrate_write", "accounting_organization_read", "payment_payment_read", "payment_payment_write", "payment_payout_read", "payment_refund_read", "payment_link_read", "payment_link_write", "commerce_item_read", "commerce_item_write", "commerce_collection_read", "commerce_collection_write", "commerce_inventory_read", "commerce_inventory_write", "commerce_location_read", "commerce_location_write", "ats_activity_read", "ats_activity_write", "ats_application_read", "ats_application_write", "ats_applicationstatus_read", "ats_candidate_read", "ats_candidate_write", "ats_interview_read", "ats_interview_write", "ats_job_read", "ats_job_write", "ats_company_read", "ats_document_read", "ats_document_write", "ats_scorecard_read", "ats_scorecard_write", "crm_company_read", "crm_company_write", "crm_contact_read", "crm_contact_write", "crm_deal_read", "crm_deal_write", "crm_event_read", "crm_event_write", "crm_lead_read", "crm_lead_write", "crm_pipeline_read", "crm_pipeline_write", "martech_list_read", "martech_list_write", "martech_member_read", "martech_member_write", "ticketing_customer_read", "ticketing_customer_write", "ticketing_ticket_read", "ticketing_ticket_write", "ticketing_note_read", "ticketing_note_write", "hris_employee_read", "hris_employee_write", "hris_group_read", "hris_group_write", "hris_payslip_read", "hris_payslip_write", "hris_timeoff_read", "hris_timeoff_write", "uc_call_read", "storage_file_read", "storage_file_write", "webhook", "genai_model_read", "genai_prompt_read", "genai_prompt_write"];
export type TIntegrationPermission = typeof IntegrationPermission[number];
export declare const IntegrationSupportWebhookType: readonly ["virtual", "native"];
export type TIntegrationSupportWebhookType = typeof IntegrationSupportWebhookType[number];
export declare const IssueStatus: readonly ["COMPLETED", "NEW", "ROADMAP", "IN_PROGRESS", "ON_HOLD", "VALIDATING", "REJECTED"];
export type TIssueStatus = typeof IssueStatus[number];
export declare const IssueType: readonly ["BUG", "FEATURE_REQUEST", "INQUIRY"];
export type TIssueType = typeof IssueType[number];
export declare const ObjectType: readonly ["accounting_account", "accounting_transaction", "accounting_contact", "accounting_invoice", "accounting_taxrate", "accounting_organization", "payment_payment", "payment_link", "payment_payout", "payment_refund", "commerce_item", "commerce_collection", "commerce_inventory", "commerce_location", "ats_activity", "ats_application", "ats_applicationstatus", "ats_candidate", "ats_document", "ats_interview", "ats_job", "ats_scorecard", "ats_company", "crm_company", "crm_contact", "crm_deal", "crm_event", "crm_lead", "crm_pipeline", "hris_employee", "hris_group", "hris_payslip", "hris_timeoff", "martech_list", "martech_member", "passthrough", "ticketing_note", "ticketing_ticket", "ticketing_customer", "uc_contact", "uc_call", "enrich_person", "enrich_company", "storage_file", "genai_model", "genai_prompt"];
export type TObjectType = typeof ObjectType[number];
export declare const PlanTerm: readonly ["monthly", "yearly"];
export type TPlanTerm = typeof PlanTerm[number];
export declare const SupportInboundType: readonly ["supported-required", "supported", "not-supported"];
export type TSupportInboundType = typeof SupportInboundType[number];
export declare const SupportOutboundType: readonly ["supported", "not-supported"];
export type TSupportOutboundType = typeof SupportOutboundType[number];
export declare const WebhookDataType: readonly ["INITIAL-PARTIAL", "INITIAL-COMPLETE", "VIRTUAL", "NATIVE"];
export type TWebhookDataType = typeof WebhookDataType[number];
export declare const WebhookEvent: readonly ["updated", "created", "deleted"];
export type TWebhookEvent = typeof WebhookEvent[number];
export declare const WorkspaceEventType: readonly ["USER_CREATED", "USER_DELETED", "CONNECTION_HEALTHY", "CONNECTION_UNHEALTHY", "CONNECTION_CREATED", "CONNECTION_UPDATED", "CONNECTION_DELETED", "CONNECTION_PAUSED", "CONNECTION_UNPAUSED", "INTEGRATION_ACTIVATED", "INTEGRATION_DEACTIVATED", "INTEGRATION_UPDATED", "WORKSPACE_UPDATED", "WORKSPACE_OVER_LIMIT", "WORKSPACE_80PERCENT_LIMIT", "WEBHOOK_CREATED", "WEBHOOK_DELETED"];
export type TWorkspaceEventType = typeof WorkspaceEventType[number];
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
    connection_id?: string;
    ip_address?: string;
    type: TApiCallType;
    method: string;
    environment?: string;
}
export interface IConnection {
    readonly id?: string;
    readonly created_at?: string | Date;
    readonly updated_at?: string | Date;
    readonly workspace_id: string;
    integration_type: string;
    external_xref?: string;
    permissions: (TIntegrationPermission)[];
    categories: (TIntegrationCategory)[];
    auth?: IConnectionAuth;
    is_paused?: boolean;
    auth_aws_arn?: string;
    environment?: string;
    last_healthy_at?: string | Date;
    last_unhealthy_at?: string | Date;
    cursors_cache?: unknown[];
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
    refresh_token_expires_in?: number;
    refresh_token_expires_date?: string | Date;
    dev_api_key?: string;
}
export interface IIntegration {
    type: string;
    created_at?: string;
    updated_at?: string;
    name: string;
    is_active?: boolean;
    categories: (TIntegrationCategory)[];
    api_docs_url?: string;
    logo_url?: string;
    in_progress: boolean;
    color?: string;
    text_color?: string;
    fa_icon?: string;
    token_names?: string[];
    token_instructions?: string[];
    web_url?: string;
    rate_limit_description?: string;
    beta?: boolean;
    support: {
        [path in string]?: IIntegrationSupport;
    };
    tested_at?: string | Date;
}
export interface IIntegrationSupport {
    methods?: {
        [path in string]?: boolean;
    };
    list_sort_by_name?: boolean;
    list_sort_by_created_at?: boolean;
    list_sort_by_updated_at?: boolean;
    list_updated_gte?: boolean;
    list_user_id?: boolean;
    list_customer_id?: boolean;
    list_company_id?: boolean;
    list_contact_id?: boolean;
    list_application_id?: boolean;
    list_candidate_id?: boolean;
    list_deal_id?: boolean;
    list_job_id?: boolean;
    list_invoice_id?: boolean;
    list_order?: boolean;
    list_query?: boolean;
    list_limit?: boolean;
    list_offset?: boolean;
    search_twitter?: boolean;
    search_name?: boolean;
    search_linkedinurl?: boolean;
    search_email?: boolean;
    search_domain?: boolean;
    inbound_fields?: {
        [path in string]?: TSupportInboundType;
    };
    outbound_fields?: {
        [path in string]?: TSupportOutboundType;
    };
    webhook_events?: {
        [path in TWebhookEvent]?: (TIntegrationSupportWebhookType)[];
    };
    list_parent_id?: boolean;
    list_account_id?: boolean;
    list_interview_id?: boolean;
    list_list_id?: boolean;
    list_ticket_id?: boolean;
    list_collection_id?: boolean;
    list_location_id?: boolean;
    list_item_id?: boolean;
    list_type?: boolean;
}
export interface IInvoice {
    stripe_id: string;
    created_at: string | Date;
    amount: number;
    connections: number;
    plan: string;
}
export interface IIssue {
    id?: string;
    created_at?: string;
    updated_at?: string;
    title: string;
    status: TIssueStatus;
    url?: string;
    workspace_id: string;
    type: TIssueType;
    resolution_time?: number;
}
export interface INotification {
    readonly id?: string;
    readonly created_at?: string | Date;
    workspace_id?: string;
    description?: string;
    user_id?: string;
    user_name?: string;
    workspace_name?: string;
    webhook_id?: string;
    connection_id?: string;
    integration_type?: string;
    integration_name?: string;
    sent_at?: string | Date;
    event?: TWorkspaceEventType;
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
    stripe_price_id?: string;
    min_price?: number;
    price_per_mille_requests?: number;
    custom_oauth?: boolean;
    max_requests?: number;
    test_stripe_product_id?: string;
    test_stripe_price_id?: string;
    min_annual_price?: number;
    stripe_annual_price_id?: string;
    test_stripe_annual_price_id?: string;
    stripe_overage_price_id?: string;
    test_stripe_overage_price_id?: string;
    dedicated_channel?: boolean;
}
export interface IUser {
    readonly id?: string;
    readonly created_at?: string | Date;
    readonly updated_at?: string | Date;
    name: string;
    readonly email: string;
    workspace_id: string;
    workspace_ids: string[];
    environment?: string;
    meta?: unknown;
}
export interface IWebhook {
    readonly id?: string;
    readonly created_at?: string | Date;
    updated_at?: string | Date;
    readonly workspace_id?: string;
    connection_id: string;
    hook_url: string;
    object_type: TObjectType;
    interval?: number;
    readonly checked_at: string | Date;
    readonly integration_type: string;
    readonly environment?: string;
    event: TWebhookEvent;
    readonly runs?: string[];
    fields?: string;
    webhook_type?: TIntegrationSupportWebhookType;
    readonly meta?: unknown;
    is_healthy?: boolean;
    page_max_limit?: number;
    filters?: {
        [path in string]?: string;
    };
}
export interface IWebhookData {
    data: unknown[];
    webhook: IWebhook;
    nonce: string;
    sig: string;
    type: TWebhookDataType;
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
    readonly stripe_subscriptions?: string[];
    readonly stripe_prices?: string[];
    readonly secret?: string;
    readonly integrations?: IWorkspaceIntegration[];
    ip_addresses?: string[];
    aws_region?: string;
    aws_key?: string;
    aws_secret?: string;
    datadog_apikey?: string;
    datadog_site?: string;
    environments?: string[];
    add_ons?: string[];
    checklist?: unknown;
    plan_term?: TPlanTerm;
    stripe_canceling_at?: string | Date;
    domain?: string;
    event_webhook_url?: string;
    event_webhook_events?: (TWorkspaceEventType)[];
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
    environment?: string;
    categories?: (TIntegrationCategory)[];
    dev_api_key?: string;
}

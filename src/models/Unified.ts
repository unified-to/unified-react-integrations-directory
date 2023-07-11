/*
Unified
==============
*/
export const ApiCallType = [
	'webhook',
	'inbound'
] as const;

export type TApiCallType = typeof ApiCallType[number];

export const IntegrationAuthType = [
	'oauth1',
	'oauth2',
	'other',
	'token'
] as const;

export type TIntegrationAuthType = typeof IntegrationAuthType[number];

export const IntegrationCategory = [
	'passthrough',
	'hris',
	'ats',
	'auth',
	'crm',
	'enrich',
	'martech',
	'ticketing',
	'uc'
] as const;

export type TIntegrationCategory = typeof IntegrationCategory[number];

export const IntegrationPermission = [
	'auth_login',
	'crm_company_read',
	'crm_company_write',
	'crm_contact_read',
	'crm_contact_write',
	'crm_deal_read',
	'crm_deal_write',
	'crm_event_read',
	'crm_event_write',
	'crm_user_read',
	'crm_user_write',
	'crm_lead_read',
	'crm_lead_write',
	'crm_file_read',
	'crm_file_write',
	'crm_pipeline_read',
	'crm_pipeline_write',
	'crm_team_read',
	'crm_team_write',
	'martech_list_read',
	'martech_list_write',
	'martech_member_read',
	'martech_member_write',
	'ticketing_agent_read',
	'ticketing_agent_write',
	'ticketing_customer_read',
	'ticketing_customer_write',
	'ticketing_ticket_read',
	'ticketing_ticket_write',
	'ticketing_note_read',
	'ticketing_note_write',
	'hris_employee_read',
	'hris_employee_write',
	'hris_group_read',
	'hris_group_write',
	'ats_candidate_read',
	'ats_candidate_write',
	'ats_interview_read',
	'ats_interview_write',
	'ats_job_read',
	'ats_job_write',
	'webhook'
] as const;

export type TIntegrationPermission = typeof IntegrationPermission[number];

export const IntegrationSupportWebhookType = [
	'virtual',
	'none',
	'native'
] as const;

export type TIntegrationSupportWebhookType = typeof IntegrationSupportWebhookType[number];

export const ObjectType = [
	'ats_application',
	'ats_candidate',
	'ats_document',
	'ats_interview',
	'ats_job',
	'ats_scorecard',
	'crm_company',
	'crm_contact',
	'crm_deal',
	'crm_event',
	'crm_file',
	'crm_lead',
	'crm_pipeline',
	'crm_team',
	'crm_user',
	'enrich_company',
	'enrich_person',
	'hris_employee',
	'hris_group',
	'martech_list',
	'martech_member',
	'passthrough',
	'ticketing_agent',
	'ticketing_customer',
	'ticketing_note',
	'ticketing_ticket',
	'uc_agent',
	'uc_call',
	'uc_contact'
] as const;

export type TObjectType = typeof ObjectType[number];

export const WebhookEvent = [
	'updated',
	'created'
] as const;

export type TWebhookEvent = typeof WebhookEvent[number];

export interface IApiCall {
	readonly id?: string; // Unique identifier for this API call
	readonly created_at?: string | Date; // The date that this object was created
	workspace_id: string;
	integration_type: string; // The integration type
	external_xref?: string; // your customer's user ID
	name: string; // The called name of the API method
	path: string; // The called API method's HTTP verb and route path (PUT /crm/{integration}/deak/{id})
	size?: number; // The size of the response
	status: string; // The resulting HTTP status code (200)
	error?: string; // The error description (if status code is >= 400)
	connection_id: string;
	ip_address?: string;
	type: TApiCallType; // The type of API Call being logged
	method: string;
	environment?: string;
}

export interface IConnection {
	readonly id?: string; // Unique identifier for this integration object
	readonly created_at?: string | Date; // The date that this integration object was created
	readonly updated_at?: string | Date; // The last date that this integration object was updated
	readonly workspace_id: string;
	integration_type: string; // The integration type
	external_xref?: string; // customer's user ID
	permissions: ( TIntegrationPermission )[];
	categories: ( TIntegrationCategory )[]; // The Integration categories that this connection supports
	auth?: IConnectionAuth;
	is_paused?: boolean; // Whether this integration has exceed the monthly limit of the plan
	auth_aws_arn?: string; // the AWS ARN / secretID for the stored auth field
	environment?: string;
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
	other_auth_info?: string[]; // When integration.auth_type = "other", this field contains the authentication credentials in the same order as token_names
	api_url?: string;
	authorize_url?: string;
	token_url?: string;
	pem?: string; // the PEM X.509 certificate in Base64 ASCII format
	key?: string; // the private KEY X.509 certificate in Base64 ASCII format
}

export interface IIntegration {
	type: string; // Identifier for this integration
	created_at?: string | Date; // Date that this integration was supported
	updated_at?: string | Date;
	name: string; // The integration's name
	is_active?: boolean; // Is this integration active in this workspace
	categories: ( TIntegrationCategory )[]; // The categories of support solutions that this integration has
	api_docs_url?: string; // The URL of the integration's API documentation
	logo_url?: string; // The URL of the integration's logo
	auth_types: ( TIntegrationAuthType )[]; // The authentication method(s) that this integration supports
	in_progress: boolean; // If this integration is not yet available as it is currently being built by unified.to
	color?: string; // button background color for AUTH
	text_color?: string; // text color for AUTH
	fa_icon?: string; // font-awesome icon
	token_names?: string[]; // if auth_types = 'token'
	token_instructions?: string[]; // instructions for the user on how to find the token/key
	web_url?: string; // URL for the software vendor
	rate_limit_description?: string;
	oauth?: IIntegrationOauth;
	beta?: boolean; // This integration is new and is still considered "beta"
	support: { [path in string]?: IIntegrationSupport };
}

export interface IIntegrationOauth {
	oauth_credentials_url?: string; // The URL to get OAUTH2 credentials for this integration
	scopes?: { [path in TIntegrationPermission]?: string[] };
	scopes_array?: ( TIntegrationPermission )[];
	has_unified_oauth2_credentials?: boolean; //  Whether Unified.to has default OAUTH2 credentials for this integration
	client_id?: string; //  filled in from workspace.integrations[].client_id
	client_secret?: string; // filled in from workspace.integrations[].client_secret
	needs_apiurl?: boolean;
	needs_tokenurl?: boolean;
	needs_authorizeurl?: boolean;
	needs_pem?: boolean;
	needs_key?: boolean;
	needs_subdomain?: boolean;
}

export interface IIntegrationSupport {
	methods?: { [path in string]?: boolean };
	list_sort_by_name?: boolean;
	list_sort_by_created_at?: boolean;
	list_sort_by_updated_at?: boolean;
	list_updated_gte?: boolean;
	list_agent_id?: boolean;
	list_customer_id?: boolean;
	list_company_id?: boolean;
	list_contact_id?: boolean;
	list_application_id?: boolean;
	list_candidate_id?: boolean;
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
	inbound_fields?: { [path in string]?: boolean };
	outbound_fields?: { [path in string]?: boolean };
	webhook_type?: TIntegrationSupportWebhookType;
	webhooks_events?: ( TWebhookEvent )[];
}

export interface IInvoice {
	stripe_id: string;
	created_at: string | Date;
	amount: number;
	connections: number;
	plan: string;
}

export interface INotification {
	readonly id?: string; // Unique identifier for this notification object
	readonly created_at?: string | Date; // The date that this integration object was created
	readonly workspace_id?: string;
	title: string; // The title of the notification
	description?: string; // Longer description of this notification
	icon?: string; // The icon name
	link_url?: string; // Link to the event
	user_id?: string;
	user_name?: string;
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
	description?: string; // description
	max_connections?: number; // Maximum active connections (1+ API call per month)
	stripe_product_id?: string;
	stripe_plan_id?: string;
	min_price?: number;
	price_per_mille_requests?: number;
	custom_oauth?: boolean;
	max_requests?: number;
	test_stripe_product_id?: string;
	test_stripe_plan_id?: string;
}

export interface IUser {
	readonly id?: string;
	readonly created_at?: string | Date;
	readonly updated_at?: string | Date;
	name: string;
	readonly email: string;
	workspace_id: string; // The current workspace
	workspace_ids: string[]; // A list of all of the user's workspaces
	environment?: string;
	meta?: unknown;
}

export interface IWebhook {
	readonly id?: string;
	readonly created_at?: string | Date;
	workspace_id: string;
	connection_id: string;
	hook_url: string; // The URL of the webhook
	events: ( TWebhookEvent )[];
	object_type: TObjectType; // The object to return (eg. CRM "contact")
	interval: number; // The interval (in minutes) to check for updated/new objets.  Minimum is 5 minutes.  Interval is based off of 5-minute increments.
	readonly checked_at: string | Date; // The last date/time that a check was done on this object
	integration_type: string;
	subscriptions?: string[]; // integration-specific subscriptions IDs
	environment?: string;
}

export interface IWorkspace {
	readonly id?: string;
	readonly created_at?: string | Date;
	readonly updated_at?: string | Date;
	name: string;
	readonly admin_ids?: string[]; // Only these users can add additional admins and invite other users
	readonly invited_emails?: string[];
	readonly pay_user_id?: string;
	readonly plan?: string;
	readonly stripe_customer?: string;
	readonly stripe_subscription?: string;
	readonly secret?: string; // Workspace API secret
	readonly integrations?: IWorkspaceIntegration[]; // Workspace active integrations
	ip_addresses?: string[]; // a list of IP addresses that are allowed to access this workspace
	aws_region?: string;
	aws_key?: string;
	aws_secret?: string;
	datadog_apikey?: string;
	environments?: string[]; // a list of authentication environments for the workspace integrations
	add_ons?: string[];
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
	pem?: string; // the PEM X.509 certificate in Base64 ASCII format
	key?: string; // the private KEY X.509 certificate in Base64 ASCII format
	environment?: string; // authentication environment
}

export const Plans: IPlan[] = [
    { name: 'Tester', description: 'Test out our unified APIs in your development application.', max_connections: 20, price_per_mille_requests: 0, custom_oauth: false, max_requests: 7500 },
    { name: 'Startup', description: 'Launch 100s of integrations in your production application.', min_price: 100, custom_oauth: true, price_per_mille_requests: 0.5, max_requests: 200000, stripe_product_id: 'prod_NpKIL9HEvIfdx2', stripe_plan_id: 'price_1N3fdgCym65m1EMKSjioHzB4', test_stripe_product_id: 'prod_Np1xniikGxq80G', test_stripe_plan_id: 'price_1N3NttCym65m1EMKareqBWRx' },
    { name: 'Growth', description: 'Your application is growing partially due to our integrations.', min_price: 500, stripe_product_id: 'prod_NpKIvppVcyFEy6', stripe_plan_id: 'price_1N3fdqCym65m1EMKKjyqXdak', max_requests: 1250000, price_per_mille_requests: 0.4, custom_oauth: true, test_stripe_product_id: 'prod_NpJuWh7JntxfS8', test_stripe_plan_id: 'price_1N3fGjCym65m1EMKHZoz5Id5' },
    { name: 'Scale', description: 'Affordable when you scale and grow your company.', min_price: 1000, max_requests: 4000000, custom_oauth: true, price_per_mille_requests: 0.25, stripe_product_id: 'prod_NpKIcO1Qitzh3t', stripe_plan_id: 'price_1N3fdxCym65m1EMKBSbTkTpl', test_stripe_product_id: 'prod_NpKHMlZb3JXloL', test_stripe_plan_id: 'price_1N3fcyCym65m1EMK1VR5D6BO' }
];


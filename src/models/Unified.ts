/*
Unified
==============
*/
export const ApiCallType = [
	'login',
	'webhook',
	'inbound',
	'mcp'
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
	'uc',
	'accounting',
	'storage',
	'commerce',
	'payment',
	'genai',
	'messaging',
	'kms',
	'task',
	'scim',
	'lms',
	'repo',
	'metadata',
	'calendar',
	'verification',
	'ads',
	'forms',
	'shipping',
	'assessment'
] as const;

export type TIntegrationCategory = typeof IntegrationCategory[number];

export const IntegrationPermission = [
	'accounting_account_read',
	'accounting_account_write',
	'accounting_transaction_read',
	'accounting_transaction_write',
	'accounting_journal_read',
	'accounting_journal_write',
	'accounting_invoice_read',
	'accounting_invoice_write',
	'accounting_bill_read',
	'accounting_bill_write',
	'accounting_creditmemo_read',
	'accounting_creditmemo_write',
	'accounting_contact_read',
	'accounting_contact_write',
	'accounting_expense_read',
	'accounting_expense_write',
	'accounting_taxrate_read',
	'accounting_taxrate_write',
	'accounting_organization_read',
	'accounting_order_read',
	'accounting_order_write',
	'accounting_purchaseorder_read',
	'accounting_purchaseorder_write',
	'accounting_salesorder_read',
	'accounting_salesorder_write',
	'accounting_report_read',
	'accounting_report_write',
	'accounting_trialbalance_read',
	'accounting_trialbalance_write',
	'accounting_profitloss_read',
	'accounting_profitloss_write',
	'accounting_balancesheet_read',
	'accounting_balancesheet_write',
	'accounting_category_read',
	'accounting_category_write',
	'payment_payment_read',
	'payment_payment_write',
	'accounting_cashflow_read',
	'accounting_cashflow_write',
	'payment_payout_read',
	'payment_refund_read',
	'payment_link_read',
	'payment_link_write',
	'payment_subscription_read',
	'payment_subscription_write',
	'commerce_item_read',
	'commerce_item_write',
	'commerce_collection_read',
	'commerce_collection_write',
	'commerce_inventory_read',
	'commerce_inventory_write',
	'commerce_location_read',
	'commerce_location_write',
	'commerce_review_read',
	'commerce_review_write',
	'commerce_saleschannel_read',
	'commerce_saleschannel_write',
	'commerce_itemvariant_read',
	'commerce_itemvariant_write',
	'verification_package_read',
	'verification_request_read',
	'verification_request_write',
	'assessment_package_read',
	'assessment_package_write',
	'assessment_order_write',
	'ats_activity_read',
	'ats_activity_write',
	'ats_application_read',
	'ats_application_write',
	'ats_applicationstatus_read',
	'ats_candidate_read',
	'ats_candidate_write',
	'ats_interview_read',
	'ats_interview_write',
	'ats_job_read',
	'ats_job_write',
	'ats_company_read',
	'ats_company_write',
	'ats_document_read',
	'ats_document_write',
	'ats_scorecard_read',
	'ats_scorecard_write',
	'crm_company_read',
	'crm_company_write',
	'crm_contact_read',
	'crm_contact_write',
	'crm_deal_read',
	'crm_deal_write',
	'crm_event_read',
	'crm_event_write',
	'crm_lead_read',
	'crm_lead_write',
	'crm_pipeline_read',
	'crm_pipeline_write',
	'martech_list_read',
	'martech_list_write',
	'martech_member_read',
	'martech_member_write',
	'martech_campaign_read',
	'martech_campaign_write',
	'martech_report_read',
	'martech_report_write',
	'ticketing_customer_read',
	'ticketing_customer_write',
	'ticketing_ticket_read',
	'ticketing_ticket_write',
	'ticketing_note_read',
	'ticketing_note_write',
	'ticketing_category_read',
	'ticketing_category_write',
	'hris_employee_read',
	'hris_employee_write',
	'hris_group_read',
	'hris_group_write',
	'hris_payslip_read',
	'hris_payslip_write',
	'hris_timeoff_read',
	'hris_timeoff_write',
	'hris_timeshift_read',
	'hris_timeshift_write',
	'hris_company_read',
	'hris_company_write',
	'hris_location_read',
	'hris_location_write',
	'hris_device_read',
	'hris_device_write',
	'hris_deduction_read',
	'hris_deduction_write',
	'hris_benefit_read',
	'hris_benefit_write',
	'uc_call_read',
	'uc_contact_read',
	'uc_contact_write',
	'uc_comment_read',
	'uc_comment_write',
	'uc_recording_read',
	'storage_file_read',
	'storage_file_write',
	'webhook',
	'genai_model_read',
	'genai_prompt_read',
	'genai_prompt_write',
	'genai_embedding_read',
	'genai_embedding_write',
	'messaging_message_read',
	'messaging_message_write',
	'messaging_channel_read',
	'messaging_event_read',
	'messaging_event_write',
	'kms_space_read',
	'kms_space_write',
	'kms_page_read',
	'kms_page_write',
	'kms_comment_read',
	'kms_comment_write',
	'task_project_read',
	'task_project_write',
	'task_task_read',
	'task_task_write',
	'task_change_read',
	'task_comment_read',
	'task_comment_write',
	'scim_users_read',
	'scim_users_write',
	'scim_groups_read',
	'scim_groups_write',
	'lms_course_read',
	'lms_course_write',
	'lms_class_read',
	'lms_class_write',
	'lms_student_read',
	'lms_student_write',
	'lms_instructor_read',
	'lms_instructor_write',
	'lms_content_read',
	'lms_content_write',
	'lms_collection_read',
	'lms_collection_write',
	'lms_activity_read',
	'lms_activity_write',
	'repo_organization_read',
	'repo_organization_write',
	'repo_repository_read',
	'repo_repository_write',
	'repo_branch_read',
	'repo_branch_write',
	'repo_commit_read',
	'repo_commit_write',
	'repo_pullrequest_read',
	'repo_pullrequest_write',
	'metadata_metadata_read',
	'metadata_metadata_write',
	'calendar_calendar_read',
	'calendar_calendar_write',
	'calendar_event_read',
	'calendar_event_write',
	'calendar_busy_read',
	'calendar_link_read',
	'calendar_link_write',
	'calendar_recording_read',
	'calendar_recording_write',
	'calendar_webinar_read',
	'calendar_webinar_write',
	'enrich_person_read',
	'enrich_company_read',
	'ads_ad_read',
	'ads_ad_write',
	'ads_campaign_read',
	'ads_campaign_write',
	'ads_group_read',
	'ads_group_write',
	'ads_report_read',
	'ads_organization_read',
	'ads_organization_write',
	'ads_creative_read',
	'ads_creative_write',
	'ads_insertionorder_read',
	'ads_insertionorder_write',
	'forms_form_read',
	'forms_form_write',
	'forms_submission_read',
	'forms_submission_write',
	'shipping_shipment_read',
	'shipping_shipment_write',
	'shipping_label_read',
	'shipping_label_write',
	'shipping_tracking_read',
	'shipping_rate_read',
	'shipping_carrier_read'
] as const;

export type TIntegrationPermission = typeof IntegrationPermission[number];

export const IntegrationSupportWebhookType = [
	'virtual',
	'native'
] as const;

export type TIntegrationSupportWebhookType = typeof IntegrationSupportWebhookType[number];

export const IssueStatus = [
	'COMPLETED',
	'NEW',
	'ROADMAP',
	'IN_PROGRESS',
	'ON_HOLD',
	'VALIDATING',
	'REJECTED'
] as const;

export type TIssueStatus = typeof IssueStatus[number];

export const ObjectType = [
	'accounting_account',
	'accounting_transaction',
	'accounting_journal',
	'accounting_contact',
	'accounting_invoice',
	'accounting_bill',
	'accounting_creditmemo',
	'accounting_taxrate',
	'accounting_organization',
	'accounting_order',
	'accounting_salesorder',
	'accounting_purchaseorder',
	'accounting_report',
	'accounting_balancesheet',
	'accounting_profitloss',
	'accounting_trialbalance',
	'accounting_category',
	'accounting_expense',
	'accounting_cashflow',
	'payment_payment',
	'payment_link',
	'payment_payout',
	'payment_refund',
	'payment_subscription',
	'commerce_item',
	'commerce_collection',
	'commerce_inventory',
	'commerce_location',
	'commerce_review',
	'commerce_saleschannel',
	'commerce_itemvariant',
	'verification_package',
	'verification_request',
	'assessment_package',
	'assessment_order',
	'ats_activity',
	'ats_application',
	'ats_applicationstatus',
	'ats_candidate',
	'ats_document',
	'ats_interview',
	'ats_job',
	'ats_scorecard',
	'ats_company',
	'crm_company',
	'crm_contact',
	'crm_deal',
	'crm_event',
	'crm_lead',
	'crm_pipeline',
	'hris_employee',
	'hris_group',
	'hris_payslip',
	'hris_timeoff',
	'hris_company',
	'hris_location',
	'hris_device',
	'hris_timeshift',
	'hris_deduction',
	'hris_benefit',
	'martech_list',
	'martech_member',
	'martech_campaign',
	'martech_report',
	'passthrough',
	'ticketing_note',
	'ticketing_ticket',
	'ticketing_customer',
	'ticketing_category',
	'uc_contact',
	'uc_call',
	'uc_comment',
	'uc_recording',
	'enrich_person',
	'enrich_company',
	'storage_file',
	'genai_model',
	'genai_prompt',
	'genai_embedding',
	'messaging_message',
	'messaging_channel',
	'messaging_event',
	'kms_space',
	'kms_page',
	'kms_comment',
	'task_project',
	'task_task',
	'task_comment',
	'task_change',
	'scim_users',
	'scim_groups',
	'lms_course',
	'lms_class',
	'lms_student',
	'lms_instructor',
	'lms_content',
	'lms_collection',
	'lms_activity',
	'repo_organization',
	'repo_repository',
	'repo_branch',
	'repo_commit',
	'repo_pullrequest',
	'metadata_metadata',
	'calendar_calendar',
	'calendar_event',
	'calendar_busy',
	'calendar_link',
	'calendar_recording',
	'calendar_webinar',
	'ads_organization',
	'ads_ad',
	'ads_campaign',
	'ads_report',
	'ads_group',
	'ads_creative',
	'ads_insertionorder',
	'forms_form',
	'forms_submission',
	'shipping_carrier',
	'shipping_rate',
	'shipping_shipment',
	'shipping_label',
	'shipping_tracking'
] as const;

export type TObjectType = typeof ObjectType[number];

export const PlanTerm = [
	'monthly',
	'yearly'
] as const;

export type TPlanTerm = typeof PlanTerm[number];

export const SupportInboundType = [
	'supported-required',
	'supported',
	'not-supported'
] as const;

export type TSupportInboundType = typeof SupportInboundType[number];

export const SupportOutboundType = [
	'supported',
	'not-supported'
] as const;

export type TSupportOutboundType = typeof SupportOutboundType[number];

export const WebhookDatabaseType = [
	'mongodb',
	'mysql',
	'postgres',
	'mssql',
	'mariadb',
	'supabase'
] as const;

export type TWebhookDatabaseType = typeof WebhookDatabaseType[number];

export const WebhookDataType = [
	'INITIAL-PARTIAL',
	'INITIAL-COMPLETE',
	'VIRTUAL',
	'NATIVE'
] as const;

export type TWebhookDataType = typeof WebhookDataType[number];

export const WebhookEvent = [
	'updated',
	'created',
	'deleted'
] as const;

export type TWebhookEvent = typeof WebhookEvent[number];

export const WorkspaceEventType = [
	'USER_CREATED',
	'USER_DELETED',
	'CONNECTION_HEALTHY',
	'CONNECTION_UNHEALTHY',
	'CONNECTION_CREATED',
	'CONNECTION_UPDATED',
	'CONNECTION_DELETED',
	'CONNECTION_PAUSED',
	'CONNECTION_UNPAUSED',
	'INTEGRATION_ACTIVATED',
	'INTEGRATION_DEACTIVATED',
	'INTEGRATION_UPDATED',
	'WORKSPACE_UPDATED',
	'WORKSPACE_OVER_LIMIT',
	'WORKSPACE_80PERCENT_LIMIT',
	'WEBHOOK_CREATED',
	'WEBHOOK_DELETED',
	'WEBHOOK_UNHEALTHY',
	'WEBHOOK_PAUSED',
	'WEBHOOK_UNPAUSED'
] as const;

export type TWorkspaceEventType = typeof WorkspaceEventType[number];

export interface IApiCall {
	id?: string; // Unique identifier for this API call
	created_at?: (string | Date | number); // The date that this object was created
	connection_id?: string;
	workspace_id: string;
	integration_type: string; // The integration type
	external_xref?: string; // your customer's user ID
	name: string; // The called name of the API method
	path: string; // The called API method's HTTP verb and route path (PUT /crm/{integration}/deak/{id})
	size?: number; // The size of the response
	status: string; // The resulting HTTP status code (200)
	error?: string; // The error description (if status code is >= 400)
	ip_address?: string;
	type: TApiCallType; // The type of API Call being logged
	method: string;
	environment?: string;
	webhook_id?: string;
	is_billable?: boolean;
	user_agent?: string;
	unified_response_time?: number;
	endapi_response_time?: number;
}

export interface ICategories {
	category: TIntegrationCategory;
	label: string;
}

export interface IConnection {
	id?: string; // Unique identifier for this integration object
	created_at?: (string | Date | number); // The date that this integration object was created
	updated_at?: (string | Date | number); // The last date that this integration object was updated
	workspace_id: string;
	integration_type: string; // The integration type
	integration_name?: string;
	external_xref?: string; // customer's user ID
	permissions: ( TIntegrationPermission )[];
	categories: ( TIntegrationCategory )[]; // The Integration categories that this connection supports
	auth?: IConnectionAuth;
	is_paused?: boolean; // Whether this integration has exceed the monthly limit of the plan
	auth_aws_arn?: string; // the AWS ARN / secretID for the stored auth field
	environment?: string;
	auth_azure_keyvault_id?: string; // the Azure Key Vault ID for the stored auth field
	auth_gcp_secret_name?: string; // the Google Cloud Secret Manager name for the stored auth field
	auth_hashi_vault_path?: string; // the HashiCorp Vault path for the stored auth field
	last_healthy_at?: (string | Date | number);
	last_unhealthy_at?: (string | Date | number);
}

export interface IConnectionAuth {
	token?: string;
	access_token?: string;
	refresh_token?: string;
	expiry_date?: (string | Date | number);
	expires_in?: number;
	emails?: string[];
	name?: string;
	user_id?: string;
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
	refresh_url?: string;
	pem?: string; // the PEM X.509 certificate in Base64 ASCII format
	key?: string; // the private KEY X.509 certificate in Base64 ASCII format
	refresh_token_expires_in?: number;
	refresh_token_expires_date?: (string | Date | number);
	dev_api_key?: string;
}

export interface IIntegration {
	type: string; // Identifier for this integration
	created_at?: string; // Date that this integration was supported (YYYY-MM-DD)
	updated_at?: string; // YYYY-MM-DD
	name: string; // The integration's name
	is_active?: boolean; // Is this integration active in this workspace
	categories: ( TIntegrationCategory )[]; // The categories of support solutions that this integration has
	api_docs_url?: string; // The URL of the integration's API documentation
	logo_url?: string; // The URL of the integration's logo
	in_progress?: boolean; // If this integration is not yet available as it is currently being built by unified.to
	color?: string; // button background color for AUTH
	text_color?: string; // text color for AUTH
	fa_icon?: string; // font-awesome icon
	token_names?: string[]; // if auth_types = 'token'
	token_instructions?: string[]; // instructions for the user on how to find the token/key
	web_url?: string; // URL for the software vendor
	rate_limit_description?: string;
	beta?: boolean; // This integration is new and is still considered "beta"
	support?: { [path in string]?: IIntegrationSupport };
	tested_at?: (string | Date | number);
	sandbox?: unknown;
	partnership?: unknown;
	saml?: unknown;
	description?: string;
	api?: unknown;
	featured?: boolean;
	popularity?: number;
	active_healthy_connections?: number;
}

export interface IIntegrationSupport {
	methods?: { [path in string]?: boolean };
	inbound_fields?: { [path in string]?: TSupportInboundType };
	outbound_fields?: { [path in string]?: TSupportOutboundType };
	webhook_events?: { [path in TWebhookEvent]?: ( TIntegrationSupportWebhookType )[] };
	raw_objects?: string[]; // objects that we map from in the integration
	slow_fields?: string[];
	from_webhook?: TSupportInboundType;
	list_sort_by_name?: TSupportInboundType;
	list_sort_by_created_at?: TSupportInboundType;
	list_sort_by_updated_at?: TSupportInboundType;
	list_updated_gte?: TSupportInboundType;
	list_user_id?: TSupportInboundType;
	list_user_mentioned_id?: TSupportInboundType;
	list_customer_id?: TSupportInboundType;
	list_company_id?: TSupportInboundType;
	list_contact_id?: TSupportInboundType;
	list_application_id?: TSupportInboundType;
	list_candidate_id?: TSupportInboundType;
	list_deal_id?: TSupportInboundType;
	list_job_id?: TSupportInboundType;
	list_invoice_id?: TSupportInboundType;
	list_order?: TSupportInboundType;
	list_query?: TSupportInboundType;
	list_limit?: TSupportInboundType;
	list_offset?: TSupportInboundType;
	list_root_id?: TSupportInboundType;
	list_list_id?: TSupportInboundType;
	list_interview_id?: TSupportInboundType;
	list_location_id?: TSupportInboundType;
	list_collection_id?: TSupportInboundType;
	list_ticket_id?: TSupportInboundType;
	list_parent_id?: TSupportInboundType;
	list_account_id?: TSupportInboundType;
	list_item_id?: TSupportInboundType;
	list_space_id?: TSupportInboundType;
	list_channel_id?: TSupportInboundType;
	list_page_id?: TSupportInboundType;
	list_type?: TSupportInboundType;
	list_link_id?: TSupportInboundType;
	list_project_id?: TSupportInboundType;
	list_item_variant_id?: TSupportInboundType;
	list_raw_fields?: TSupportInboundType;
	list_student_id?: TSupportInboundType;
	list_class_id?: TSupportInboundType;
	list_instructor_id?: TSupportInboundType;
	list_course_id?: TSupportInboundType;
	list_teacher_id?: TSupportInboundType;
	list_repo_id?: TSupportInboundType;
	list_org_id?: TSupportInboundType;
	list_calendar_id?: TSupportInboundType;
	list_task_id?: TSupportInboundType;
	search_twitter?: TSupportInboundType;
	search_name?: TSupportInboundType;
	search_linkedinurl?: TSupportInboundType;
	search_email?: TSupportInboundType;
	search_domain?: TSupportInboundType;
	list_event_id?: TSupportInboundType;
	list_start_gte?: TSupportInboundType;
	list_end_lt?: TSupportInboundType;
	list_lead_id?: TSupportInboundType;
	list_call_id?: TSupportInboundType;
	list_document_id?: TSupportInboundType;
	list_payment_id?: TSupportInboundType;
	list_status?: TSupportInboundType;
	list_branch_id?: TSupportInboundType;
	list_pipeline_id?: TSupportInboundType;
	list_category_id?: TSupportInboundType;
	list_package_id?: TSupportInboundType;
	list_expand?: TSupportInboundType;
	native_webhook_parent_id?: TSupportInboundType;
	native_webhook_project_id?: TSupportInboundType;
	native_webhook_company_id?: TSupportInboundType;
	native_webhook_task_id?: TSupportInboundType;
	native_webhook_channel_id?: TSupportInboundType;
	native_webhook_calendar_id?: TSupportInboundType;
	native_webhook_event_id?: TSupportInboundType;
	virtual_webhook_updated_gte?: TSupportInboundType;
	virtual_webhook_limit?: TSupportInboundType;
	virtual_webhook_channel_id?: TSupportInboundType;
	virtual_webhook_parent_id?: TSupportInboundType;
	virtual_webhook_contact_id?: TSupportInboundType;
	virtual_webhook_deal_id?: TSupportInboundType;
	virtual_webhook_company_id?: TSupportInboundType;
	virtual_webhook_user_id?: TSupportInboundType;
	virtual_webhook_user_mentioned_id?: TSupportInboundType;
	virtual_webhook_type?: TSupportInboundType;
	virtual_webhook_ticket_id?: TSupportInboundType;
	virtual_webhook_expand?: TSupportInboundType;
	virtual_webhook_status?: TSupportInboundType;
	virtual_webhook_start_gte?: TSupportInboundType;
	virtual_webhook_end_lt?: TSupportInboundType;
	virtual_webhook_task_id?: TSupportInboundType;
	virtual_webhook_space_id?: TSupportInboundType;
	virtual_webhook_repo_id?: TSupportInboundType;
	virtual_webhook_project_id?: TSupportInboundType;
	virtual_webhook_pipeline_id?: TSupportInboundType;
	virtual_webhook_page_id?: TSupportInboundType;
	virtual_webhook_org_id?: TSupportInboundType;
	virtual_webhook_location_id?: TSupportInboundType;
	virtual_webhook_list_id?: TSupportInboundType;
	virtual_webhook_job_id?: TSupportInboundType;
	virtual_webhook_item_id?: TSupportInboundType;
	virtual_webhook_fields?: TSupportInboundType;
	virtual_webhook_event_id?: TSupportInboundType;
	virtual_webhook_customer_id?: TSupportInboundType;
	virtual_webhook_collection_id?: TSupportInboundType;
	virtual_webhook_candidate_id?: TSupportInboundType;
	virtual_webhook_call_id?: TSupportInboundType;
	virtual_webhook_branch_id?: TSupportInboundType;
	virtual_webhook_application_id?: TSupportInboundType;
	virtual_webhook_item_variant_id?: TSupportInboundType;
	virtual_webhook_calendar_id?: TSupportInboundType;
	virtual_webhook_lead_id?: TSupportInboundType;
	list_payslip_id?: TSupportInboundType;
	list_benefit_id?: TSupportInboundType;
	list_saleschannel_id?: TSupportInboundType;
	virtual_webhook_saleschannel_id?: TSupportInboundType;
	list_campaign_id?: TSupportInboundType;
	list_ad_id?: TSupportInboundType;
	list_group_id?: TSupportInboundType;
	virtual_webhook_campaign_id?: TSupportInboundType;
	virtual_webhook_ad_id?: TSupportInboundType;
	virtual_webhook_group_id?: TSupportInboundType;
	list_form_id?: TSupportInboundType;
	virtual_webhook_form_id?: TSupportInboundType;
	native_webhook_form_id?: TSupportInboundType;
	list_order_id?: TSupportInboundType;
	virtual_webhook_order_id?: TSupportInboundType;
	native_webhook_order_id?: TSupportInboundType;
	list_carrier_id?: TSupportInboundType;
	virtual_webhook_carrier_id?: TSupportInboundType;
	native_webhook_carrier_id?: TSupportInboundType;
	list_shipment_id?: TSupportInboundType;
	virtual_webhook_shipment_id?: TSupportInboundType;
	native_webhook_shipment_id?: TSupportInboundType;
	list_label_id?: TSupportInboundType;
	virtual_webhook_label_id?: TSupportInboundType;
	native_webhook_label_id?: TSupportInboundType;
	list_member_id?: TSupportInboundType;
	virtual_webhook_member_id?: TSupportInboundType;
	native_webhook_member_id?: TSupportInboundType;
	list_content_id?: TSupportInboundType;
	virtual_webhook_course_id?: TSupportInboundType;
	native_webhook_course_id?: TSupportInboundType;
	virtual_webhook_student_id?: TSupportInboundType;
	native_webhook_student_id?: TSupportInboundType;
}

export interface IInvoice {
	stripe_id: string;
	created_at: (string | Date | number);
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
	type?: string[];
	resolution_time?: number;
	ticket_ref: string;
	size?: number; // 1-5, 1 is lowest
	importance?: number; // 1-5, 1 is lowest
}

export interface INotification {
	id?: string; // Unique identifier for this notification object
	created_at?: (string | Date | number); // The date that this integration object was created
	workspace_id?: string;
	description?: string; // Longer description of this notification
	user_id?: string;
	user_name?: string;
	workspace_name?: string;
	webhook_id?: string;
	connection_id?: string;
	integration_type?: string;
	integration_name?: string;
	sent_at?: (string | Date | number);
	event?: TWorkspaceEventType;
}

export interface IPermission {
	can_create_org: boolean;
	can_leave_org: boolean;
	can_downgrade: boolean;
	can_invite: boolean;
	can_update_org: boolean;
	can_add_and_remove_admin: boolean;
	can_accept_invite: boolean;
	can_reject_invite: boolean;
	can_pay: boolean;
	can_get_invoices: boolean;
	is_admin: boolean;
}

export interface IPlan {
	name: string;
	description?: string; // description
	max_connections?: number; // Maximum active connections (1+ API call per month)
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
	dedicated_channel?: boolean; // Dedicated Slack/Discord channel
}

export interface IUser {
	id?: string;
	created_at?: (string | Date | number);
	updated_at?: (string | Date | number);
	name: string;
	email: string;
	workspace_id: string; // The current workspace
	workspace_ids: string[]; // A list of all of the user's workspaces
	environment?: string;
	meta?: unknown;
}

export interface IWebhook {
	id?: string;
	created_at?: (string | Date | number);
	updated_at?: (string | Date | number);
	workspace_id?: string;
	connection_id: string;
	hook_url?: string; // The URL of the webhook
	object_type: TObjectType; // The object to return (eg. CRM "contact")
	interval?: number; // The interval (in minutes) to check for updated/new objets. 
	checked_at: (string | Date | number); // The last date/time that a check was done on this object
	integration_type: string;
	environment?: string;
	event: TWebhookEvent;
	runs?: string[]; // An array of the most revent virtual webhook runs
	fields?: string;
	webhook_type?: TIntegrationSupportWebhookType;
	meta?: unknown;
	is_healthy?: boolean;
	page_max_limit?: number;
	filters?: { [path in string]?: string };
	db_type?: TWebhookDatabaseType;
	db_url?: string;
	db_schema?: string;
	db_name_prefix?: string;
	is_paused?: boolean;
}

export interface IWebhookData {
	data: unknown[]; // The data array will contact an array of specific objects according to the webhook's connection. (eg. CRM Contacts)
	webhook: IWebhook; // The webhook object
	nonce: string; // random string
	sig?: string; // @deprecated; use sig256 instead
	sig256?: string; // HMAC-SHA256(workspace.secret, data + nonce)
	type: TWebhookDataType;
	external_xref?: string;
}

export interface IWorkspace {
	id?: string;
	created_at?: (string | Date | number);
	updated_at?: (string | Date | number);
	name: string;
	admin_ids?: string[]; // Only these users can add additional admins and invite other users
	invited_emails?: string[];
	pay_user_id?: string;
	plan?: string;
	stripe_customer?: string;
	stripe_subscriptions?: string[];
	stripe_prices?: string[];
	secret?: string; // Workspace API secret
	integrations?: IWorkspaceIntegration[]; // Workspace active integrations
	ip_addresses?: string[]; // a list of IP addresses that are allowed to access this workspace
	aws_region?: string;
	aws_key?: string;
	aws_secret?: string;
	datadog_apikey?: string;
	datadog_site?: string;
	environments?: string[]; // a list of authentication environments for the workspace integrations
	add_ons?: string[];
	checklist?: unknown;
	plan_term?: TPlanTerm; // monthly or yearly
	stripe_canceling_at?: (string | Date | number);
	domain?: string; // when set, users of the same domain will auto-join this workspace.  must not be gmail.com or other public domains
	event_webhook_url?: string;
	event_webhook_events?: ( TWorkspaceEventType )[];
	custom_auth_domain?: string;
	custom_auth_domain_valid?: boolean;
	custom_api_domain?: string;
	slow_fields_opt_in?: boolean;
	notion_verification_token?: string;
	favicon_url?: string;
	is_baa?: boolean;
	saml_integration_type?: string;
	saml_idp_url?: string;
	saml_idp_entity_id?: string;
	saml_pem?: string; // the PEM X.509 certificate in Base64 ASCII format
	saml_only_login?: boolean; // if true, only allow SAML login
	azure_keyvault_url?: string;
	azure_tenant_id?: string;
	azure_client_id?: string;
	azure_client_secret?: string;
	gcp_project_id?: string;
	gcp_client_email?: string;
	gcp_private_key?: string;
	hashicorp_vault_url?: string;
	hashicorp_vault_token?: string;
	hashicorp_vault_namespace?: string;
	hashicorp_vault_kv_mount?: string;
	hashicorp_vault_kv_version?: string; // 1 or 2
	grafana_apikey?: string;
	grafana_site?: string;
	clickhouse_url?: string;
	clickhouse_username?: string;
	clickhouse_password?: string;
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
	refresh_url?: string;
	base_url?: string;
	pem?: string; // the PEM X.509 certificate in Base64 ASCII format
	key?: string; // the private KEY X.509 certificate in Base64 ASCII format
	environment?: string; // authentication environment
	categories?: ( TIntegrationCategory )[];
	dev_api_key?: string;
	overriden_scopes?: { [path in TIntegrationPermission]?: string };
}

export const CATEGORIES: ICategories[] = [
    { category: 'crm', label: 'CRM' },
    { category: 'martech', label: 'Marketing' },
    { category: 'uc', label: 'Unified Communications' },
    { category: 'enrich', label: 'Enrichment' }
];


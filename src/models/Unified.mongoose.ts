

// Mongoose schemas

import { SchemaTypes } from 'mongoose';

export const schemaApiCall = {
	connection_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Connection' },
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	integration_type: { type: String, index: true }, // The integration type
	external_xref: { type: String, index: true }, // your customer's user ID
	name: { type: String, index: true }, // The called name of the API method
	path: { type: String }, // The called API method's HTTP verb and route path (PUT /crm/{integration}/deak/{id})
	size: { type: Number }, // The size of the response
	status: { type: String, index: true }, // The resulting HTTP status code (200)
	error: { type: String }, // The error description (if status code is >= 400)
	ip_address: { type: String },
	type: { type: String, enum: [ 'login', 'webhook', 'inbound', 'mcp' ] }, // The type of API Call being logged
	method: { type: String },
	environment: { type: String, index: true, default: 'Production' },
	webhook_id: { type: SchemaTypes.ObjectId, ref: 'Webhook' },
	is_billable: { type: Boolean },
};

export const schemaConnectionAuth = {
	token: { type: String },
	access_token: { type: String },
	refresh_token: { type: String },
	expiry_date: { type: Date },
	expires_in: { type: Number },
	emails: { type: [ String ] },
	name: { type: String },
	user_id: { type: String },
	app_id: { type: String },
	client_id: { type: String },
	client_secret: { type: String },
	consumer_key: { type: String },
	consumer_secret: { type: String },
	meta: { type: Object },
	state: { type: String },
	other_auth_info: { type: [ String ] }, // When integration.auth_type = "other", this field contains the authentication credentials in the same order as token_names
	api_url: { type: String },
	authorize_url: { type: String },
	token_url: { type: String },
	refresh_url: { type: String },
	pem: { type: String }, // the PEM X.509 certificate in Base64 ASCII format
	key: { type: String }, // the private KEY X.509 certificate in Base64 ASCII format
	refresh_token_expires_in: { type: Number },
	refresh_token_expires_date: { type: Date },
	dev_api_key: { type: String },
};

export const schemaConnection = {
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	integration_type: { type: String, index: true }, // The integration type
	integration_name: { type: String },
	external_xref: { type: String, index: true }, // customer's user ID
	permissions: { type: [ String ], enum: [ 'accounting_account_read', 'accounting_account_write', 'accounting_transaction_read', 'accounting_transaction_write', 'accounting_journal_read', 'accounting_journal_write', 'accounting_invoice_read', 'accounting_invoice_write', 'accounting_bill_read', 'accounting_bill_write', 'accounting_creditmemo_read', 'accounting_creditmemo_write', 'accounting_contact_read', 'accounting_contact_write', 'accounting_expense_read', 'accounting_expense_write', 'accounting_taxrate_read', 'accounting_taxrate_write', 'accounting_organization_read', 'accounting_order_read', 'accounting_order_write', 'accounting_purchaseorder_read', 'accounting_purchaseorder_write', 'accounting_salesorder_read', 'accounting_salesorder_write', 'accounting_report_read', 'accounting_report_write', 'accounting_trialbalance_read', 'accounting_trialbalance_write', 'accounting_profitloss_read', 'accounting_profitloss_write', 'accounting_balancesheet_read', 'accounting_balancesheet_write', 'accounting_category_read', 'accounting_category_write', 'payment_payment_read', 'payment_payment_write', 'accounting_cashflow_read', 'accounting_cashflow_write', 'payment_payout_read', 'payment_refund_read', 'payment_link_read', 'payment_link_write', 'payment_subscription_read', 'payment_subscription_write', 'commerce_item_read', 'commerce_item_write', 'commerce_collection_read', 'commerce_collection_write', 'commerce_inventory_read', 'commerce_inventory_write', 'commerce_location_read', 'commerce_location_write', 'commerce_review_read', 'commerce_review_write', 'commerce_saleschannel_read', 'commerce_saleschannel_write', 'verification_package_read', 'verification_request_read', 'verification_request_write', 'ats_activity_read', 'ats_activity_write', 'ats_application_read', 'ats_application_write', 'ats_applicationstatus_read', 'ats_candidate_read', 'ats_candidate_write', 'ats_interview_read', 'ats_interview_write', 'ats_job_read', 'ats_job_write', 'ats_company_read', 'ats_company_write', 'ats_document_read', 'ats_document_write', 'ats_scorecard_read', 'ats_scorecard_write', 'crm_company_read', 'crm_company_write', 'crm_contact_read', 'crm_contact_write', 'crm_deal_read', 'crm_deal_write', 'crm_event_read', 'crm_event_write', 'crm_lead_read', 'crm_lead_write', 'crm_pipeline_read', 'crm_pipeline_write', 'martech_list_read', 'martech_list_write', 'martech_member_read', 'martech_member_write', 'ticketing_customer_read', 'ticketing_customer_write', 'ticketing_ticket_read', 'ticketing_ticket_write', 'ticketing_note_read', 'ticketing_note_write', 'ticketing_category_read', 'ticketing_category_write', 'hris_employee_read', 'hris_employee_write', 'hris_group_read', 'hris_group_write', 'hris_payslip_read', 'hris_payslip_write', 'hris_timeoff_read', 'hris_timeoff_write', 'hris_timeshift_read', 'hris_timeshift_write', 'hris_company_read', 'hris_company_write', 'hris_location_read', 'hris_location_write', 'hris_device_read', 'hris_device_write', 'hris_deduction_read', 'hris_deduction_write', 'hris_benefit_read', 'hris_benefit_write', 'uc_call_read', 'uc_contact_read', 'uc_contact_write', 'uc_comment_read', 'uc_comment_write', 'uc_recording_read', 'storage_file_read', 'storage_file_write', 'webhook', 'genai_model_read', 'genai_prompt_read', 'genai_prompt_write', 'genai_embedding_read', 'genai_embedding_write', 'messaging_message_read', 'messaging_message_write', 'messaging_channel_read', 'messaging_event_read', 'messaging_event_write', 'kms_space_read', 'kms_space_write', 'kms_page_read', 'kms_page_write', 'kms_comment_read', 'kms_comment_write', 'task_project_read', 'task_project_write', 'task_task_read', 'task_task_write', 'task_change_read', 'task_comment_read', 'task_comment_write', 'scim_users_read', 'scim_users_write', 'scim_groups_read', 'scim_groups_write', 'lms_course_read', 'lms_course_write', 'lms_class_read', 'lms_class_write', 'lms_student_read', 'lms_student_write', 'lms_instructor_read', 'lms_instructor_write', 'repo_organization_read', 'repo_organization_write', 'repo_repository_read', 'repo_repository_write', 'repo_branch_read', 'repo_branch_write', 'repo_commit_read', 'repo_commit_write', 'repo_pullrequest_read', 'repo_pullrequest_write', 'metadata_metadata_read', 'metadata_metadata_write', 'calendar_calendar_read', 'calendar_calendar_write', 'calendar_event_read', 'calendar_event_write', 'calendar_busy_read', 'calendar_link_read', 'calendar_link_write', 'calendar_recording_read', 'calendar_recording_write', 'enrich_person_read', 'enrich_company_read', 'ads_ad_read', 'ads_ad_write', 'ads_campaign_read', 'ads_campaign_write', 'ads_group_read', 'ads_group_write', 'ads_report_read', 'ads_organization_read', 'ads_organization_write', 'forms_form_read', 'forms_form_write', 'forms_submission_read', 'forms_submission_write', 'shipping_shipment_read', 'shipping_shipment_write', 'shipping_label_read', 'shipping_label_write', 'shipping_tracking_read', 'shipping_rate_read', 'shipping_carrier_read' ] },
	categories: { type: [ String ], enum: [ 'passthrough', 'hris', 'ats', 'auth', 'crm', 'enrich', 'martech', 'ticketing', 'uc', 'accounting', 'storage', 'commerce', 'payment', 'genai', 'messaging', 'kms', 'task', 'scim', 'lms', 'repo', 'metadata', 'calendar', 'verification', 'ads', 'forms', 'shipping' ], index: true }, // The Integration categories that this connection supports
	auth: { type: schemaConnectionAuth },
	is_paused: { type: Boolean }, // Whether this integration has exceed the monthly limit of the plan
	auth_aws_arn: { type: String }, // the AWS ARN / secretID for the stored auth field
	environment: { type: String, default: 'Production' },
	last_healthy_at: { type: Date },
	last_unhealthy_at: { type: Date },
};

export const schemaIntegrationSupport = {
	methods: { type: Object },
	inbound_fields: { type: Object },
	outbound_fields: { type: Object },
	webhook_events: { type: [ Object ] },
	raw_objects: { type: [ String ] }, // objects that we map from in the integration
	slow_fields: { type: [ String ] },
	from_webhook: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_sort_by_name: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_sort_by_created_at: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_sort_by_updated_at: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_updated_gte: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_user_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_user_mentioned_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_customer_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_company_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_contact_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_application_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_candidate_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_deal_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_job_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_invoice_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_order: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_query: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_limit: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_offset: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_root_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_list_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_interview_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_location_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_collection_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_ticket_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_parent_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_account_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_item_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_space_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_channel_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_page_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_type: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_link_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_project_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_item_variant_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_raw_fields: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_student_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_class_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_instructor_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_course_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_teacher_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_repo_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_org_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_calendar_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_task_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	search_twitter: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	search_name: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	search_linkedinurl: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	search_email: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	search_domain: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_event_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_start_gte: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_end_lt: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_lead_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_call_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_document_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_payment_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_status: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_branch_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_pipeline_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_category_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_package_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_expand: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_parent_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_project_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_company_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_task_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_channel_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_calendar_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_event_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_updated_gte: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_limit: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_channel_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_parent_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_contact_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_deal_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_company_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_user_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_user_mentioned_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_type: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_ticket_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_expand: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_status: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_start_gte: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_end_lt: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_task_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_space_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_repo_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_project_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_pipeline_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_page_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_org_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_location_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_list_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_job_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_item_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_fields: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_event_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_customer_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_collection_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_candidate_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_call_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_branch_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_application_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_item_variant_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_calendar_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_lead_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_payslip_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_benefit_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_saleschannel_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_saleschannel_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_campaign_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_ad_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_group_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_campaign_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_ad_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_group_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_form_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_form_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_form_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_order_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_order_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_order_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_carrier_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_carrier_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_carrier_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	list_shipment_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	virtual_webhook_shipment_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
	native_webhook_shipment_id: { type: String, enum: [ 'supported-required', 'supported', 'not-supported' ] },
};

export const schemaInvoice = {
};

export const schemaIssue = {
	title: { type: String },
	status: { type: String, enum: [ 'COMPLETED', 'NEW', 'ROADMAP', 'IN_PROGRESS', 'ON_HOLD', 'VALIDATING', 'REJECTED' ] },
	url: { type: String },
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	type: { type: [ String ] },
	resolution_time: { type: Number },
	ticket_ref: { type: String, index: true },
	size: { type: Number }, // 1-5, 1 is lowest
	importance: { type: Number }, // 1-5, 1 is lowest
};

export const schemaNotification = {
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	description: { type: String }, // Longer description of this notification
	user_id: { type: SchemaTypes.ObjectId, ref: 'User' },
	user_name: { type: String },
	workspace_name: { type: String },
	webhook_id: { type: SchemaTypes.ObjectId, ref: 'Webhook' },
	connection_id: { type: SchemaTypes.ObjectId, ref: 'Connection' },
	integration_type: { type: String },
	integration_name: { type: String },
	sent_at: { type: Date },
	event: { type: String, enum: [ 'USER_CREATED', 'USER_DELETED', 'CONNECTION_HEALTHY', 'CONNECTION_UNHEALTHY', 'CONNECTION_CREATED', 'CONNECTION_UPDATED', 'CONNECTION_DELETED', 'CONNECTION_PAUSED', 'CONNECTION_UNPAUSED', 'INTEGRATION_ACTIVATED', 'INTEGRATION_DEACTIVATED', 'INTEGRATION_UPDATED', 'WORKSPACE_UPDATED', 'WORKSPACE_OVER_LIMIT', 'WORKSPACE_80PERCENT_LIMIT', 'WEBHOOK_CREATED', 'WEBHOOK_DELETED', 'WEBHOOK_UNHEALTHY', 'WEBHOOK_PAUSED', 'WEBHOOK_UNPAUSED' ] },
};

export const schemaUser = {
	name: { type: String },
	email: { type: String, index: true },
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' }, // The current workspace
	workspace_ids: { type: [ SchemaTypes.ObjectId ], index: true, ref: 'Workspace' }, // A list of all of the user's workspaces
	environment: { type: String, default: 'Production' },
	meta: { type: Object },
};

export const schemaWebhook = {
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	connection_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Integration' },
	hook_url: { type: String }, // The URL of the webhook
	object_type: { type: String, enum: [ 'accounting_account', 'accounting_transaction', 'accounting_journal', 'accounting_contact', 'accounting_invoice', 'accounting_bill', 'accounting_creditmemo', 'accounting_taxrate', 'accounting_organization', 'accounting_order', 'accounting_salesorder', 'accounting_purchaseorder', 'accounting_report', 'accounting_balancesheet', 'accounting_profitloss', 'accounting_trialbalance', 'accounting_category', 'accounting_expense', 'accounting_cashflow', 'payment_payment', 'payment_link', 'payment_payout', 'payment_refund', 'payment_subscription', 'commerce_item', 'commerce_collection', 'commerce_inventory', 'commerce_location', 'commerce_review', 'commerce_saleschannel', 'verification_package', 'verification_request', 'ats_activity', 'ats_application', 'ats_applicationstatus', 'ats_candidate', 'ats_document', 'ats_interview', 'ats_job', 'ats_scorecard', 'ats_company', 'crm_company', 'crm_contact', 'crm_deal', 'crm_event', 'crm_lead', 'crm_pipeline', 'hris_employee', 'hris_group', 'hris_payslip', 'hris_timeoff', 'hris_company', 'hris_location', 'hris_device', 'hris_timeshift', 'hris_deduction', 'hris_benefit', 'martech_list', 'martech_member', 'passthrough', 'ticketing_note', 'ticketing_ticket', 'ticketing_customer', 'ticketing_category', 'uc_contact', 'uc_call', 'uc_comment', 'uc_recording', 'enrich_person', 'enrich_company', 'storage_file', 'genai_model', 'genai_prompt', 'genai_embedding', 'messaging_message', 'messaging_channel', 'messaging_event', 'kms_space', 'kms_page', 'kms_comment', 'task_project', 'task_task', 'task_comment', 'task_change', 'scim_users', 'scim_groups', 'lms_course', 'lms_class', 'lms_student', 'lms_instructor', 'repo_organization', 'repo_repository', 'repo_branch', 'repo_commit', 'repo_pullrequest', 'metadata_metadata', 'calendar_calendar', 'calendar_event', 'calendar_busy', 'calendar_link', 'calendar_recording', 'ads_organization', 'ads_ad', 'ads_campaign', 'ads_report', 'ads_group', 'forms_form', 'forms_submission', 'shipping_carrier', 'shipping_rate', 'shipping_shipment', 'shipping_label', 'shipping_tracking' ] }, // The object to return (eg. CRM "contact")
	interval: { type: Number }, // The interval (in minutes) to check for updated/new objets. 
	checked_at: { type: Date }, // The last date/time that a check was done on this object
	integration_type: { type: String },
	environment: { type: String, default: 'Production' },
	event: { type: String, enum: [ 'updated', 'created', 'deleted' ] },
	runs: { type: [ String ] }, // An array of the most revent virtual webhook runs
	fields: { type: String },
	webhook_type: { type: String, enum: [ 'virtual', 'native' ] },
	meta: { type: Object },
	is_healthy: { type: Boolean },
	page_max_limit: { type: Number },
	filters: { type: Object },
	db_type: { type: String, enum: [ 'mongodb', 'mysql', 'postgres', 'mssql', 'mariadb', 'supabase' ] },
	db_url: { type: String },
	db_schema: { type: String },
	db_name_prefix: { type: String },
	is_paused: { type: Boolean },
};

export const schemaWebhookData = {
	data: { type: [ Object ] }, // The data array will contact an array of specific objects according to the webhook's connection. (eg. CRM Contacts)
	webhook: { type: schemaWebhook }, // The webhook object
	nonce: { type: String }, // random string
	sig: { type: String }, // @deprecated; use sig256 instead
	sig256: { type: String }, // HMAC-SHA256(workspace.secret, data + nonce)
	type: { type: String, enum: [ 'INITIAL-PARTIAL', 'INITIAL-COMPLETE', 'VIRTUAL', 'NATIVE' ] },
	external_xref: { type: String },
};

export const schemaWorkspaceIntegration = {
	integration_type: { type: String },
	client_id: { type: String },
	client_secret: { type: String },
	consumer_key: { type: String },
	consumer_secret: { type: String },
	is_active: { type: Boolean },
	api_url: { type: String },
	authorize_url: { type: String },
	token_url: { type: String },
	refresh_url: { type: String },
	base_url: { type: String },
	pem: { type: String }, // the PEM X.509 certificate in Base64 ASCII format
	key: { type: String }, // the private KEY X.509 certificate in Base64 ASCII format
	environment: { type: String, default: 'Production' }, // authentication environment
	categories: { type: [ String ], enum: [ 'passthrough', 'hris', 'ats', 'auth', 'crm', 'enrich', 'martech', 'ticketing', 'uc', 'accounting', 'storage', 'commerce', 'payment', 'genai', 'messaging', 'kms', 'task', 'scim', 'lms', 'repo', 'metadata', 'calendar', 'verification', 'ads', 'forms', 'shipping' ] },
	dev_api_key: { type: String },
	overriden_scopes: { type: Object },
};

export const schemaWorkspace = {
	name: { type: String },
	admin_ids: { type: [ SchemaTypes.ObjectId ], index: true, ref: 'User' }, // Only these users can add additional admins and invite other users
	invited_emails: { type: [ String ], index: true },
	pay_user_id: { type: String },
	plan: { type: String },
	stripe_customer: { type: String },
	stripe_subscriptions: { type: [ String ] },
	stripe_prices: { type: [ String ] },
	secret: { type: String }, // Workspace API secret
	integrations: { type: [ schemaWorkspaceIntegration ] }, // Workspace active integrations
	ip_addresses: { type: [ String ] }, // a list of IP addresses that are allowed to access this workspace
	aws_region: { type: String },
	aws_key: { type: String },
	aws_secret: { type: String },
	datadog_apikey: { type: String },
	datadog_site: { type: String },
	environments: { type: [ String ] }, // a list of authentication environments for the workspace integrations
	add_ons: { type: [ String ] },
	checklist: { type: Object },
	plan_term: { type: String, enum: [ 'monthly', 'yearly' ], default: 'monthly' }, // monthly or yearly
	stripe_canceling_at: { type: Date },
	domain: { type: String }, // when set, users of the same domain will auto-join this workspace.  must not be gmail.com or other public domains
	event_webhook_url: { type: String },
	event_webhook_events: { type: [ String ], enum: [ 'USER_CREATED', 'USER_DELETED', 'CONNECTION_HEALTHY', 'CONNECTION_UNHEALTHY', 'CONNECTION_CREATED', 'CONNECTION_UPDATED', 'CONNECTION_DELETED', 'CONNECTION_PAUSED', 'CONNECTION_UNPAUSED', 'INTEGRATION_ACTIVATED', 'INTEGRATION_DEACTIVATED', 'INTEGRATION_UPDATED', 'WORKSPACE_UPDATED', 'WORKSPACE_OVER_LIMIT', 'WORKSPACE_80PERCENT_LIMIT', 'WEBHOOK_CREATED', 'WEBHOOK_DELETED', 'WEBHOOK_UNHEALTHY', 'WEBHOOK_PAUSED', 'WEBHOOK_UNPAUSED' ] },
	custom_auth_domain: { type: String },
	custom_auth_domain_valid: { type: Boolean },
	custom_api_domain: { type: String },
	slow_fields_opt_in: { type: Boolean },
	notion_verification_token: { type: String },
	favicon_url: { type: String },
	is_baa: { type: Boolean },
	saml_integration_type: { type: String },
	saml_idp_url: { type: String },
	saml_idp_entity_id: { type: String },
	saml_pem: { type: String }, // the PEM X.509 certificate in Base64 ASCII format
	saml_only_login: { type: Boolean }, // if true, only allow SAML login
};


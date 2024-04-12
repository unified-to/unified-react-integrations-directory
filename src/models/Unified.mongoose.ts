

// Mongoose schemas

import { SchemaTypes } from 'mongoose';

export const schemaApiCall = {
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	integration_type: { type: String, index: true }, // The integration type
	external_xref: { type: String, index: true }, // your customer's user ID
	name: { type: String }, // The called name of the API method
	path: { type: String }, // The called API method's HTTP verb and route path (PUT /crm/{integration}/deak/{id})
	size: { type: Number }, // The size of the response
	status: { type: String }, // The resulting HTTP status code (200)
	error: { type: String }, // The error description (if status code is >= 400)
	connection_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Connection' },
	ip_address: { type: String },
	type: { type: String, enum: [ 'login', 'webhook', 'inbound' ] }, // The type of API Call being logged
	method: { type: String },
	environment: { type: String, default: 'Production' },
};

export const schemaConnectionAuth = {
	token: { type: String },
	access_token: { type: String },
	refresh_token: { type: String },
	expiry_date: { type: Date },
	expires_in: { type: Number },
	emails: { type: [ String ] },
	name: { type: String },
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
	pem: { type: String }, // the PEM X.509 certificate in Base64 ASCII format
	key: { type: String }, // the private KEY X.509 certificate in Base64 ASCII format
	refresh_token_expires_in: { type: Number },
	refresh_token_expires_date: { type: Date },
	dev_api_key: { type: String },
};

export const schemaConnection = {
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	integration_type: { type: String, index: true }, // The integration type
	external_xref: { type: String, index: true }, // customer's user ID
	permissions: { type: [ String ], enum: [ 'auth_login', 'accounting_account_read', 'accounting_account_write', 'accounting_transaction_read', 'accounting_transaction_write', 'accounting_invoice_read', 'accounting_invoice_write', 'accounting_contact_read', 'accounting_contact_write', 'accounting_taxrate_read', 'accounting_taxrate_write', 'accounting_organization_read', 'payment_payment_read', 'payment_payment_write', 'payment_payout_read', 'payment_refund_read', 'payment_link_read', 'payment_link_write', 'commerce_item_read', 'commerce_item_write', 'commerce_collection_read', 'commerce_collection_write', 'commerce_inventory_read', 'commerce_inventory_write', 'commerce_location_read', 'commerce_location_write', 'ats_activity_read', 'ats_activity_write', 'ats_application_read', 'ats_application_write', 'ats_applicationstatus_read', 'ats_candidate_read', 'ats_candidate_write', 'ats_interview_read', 'ats_interview_write', 'ats_job_read', 'ats_job_write', 'ats_company_read', 'ats_document_read', 'ats_document_write', 'ats_scorecard_read', 'ats_scorecard_write', 'crm_company_read', 'crm_company_write', 'crm_contact_read', 'crm_contact_write', 'crm_deal_read', 'crm_deal_write', 'crm_event_read', 'crm_event_write', 'crm_lead_read', 'crm_lead_write', 'crm_pipeline_read', 'crm_pipeline_write', 'martech_list_read', 'martech_list_write', 'martech_member_read', 'martech_member_write', 'ticketing_customer_read', 'ticketing_customer_write', 'ticketing_ticket_read', 'ticketing_ticket_write', 'ticketing_note_read', 'ticketing_note_write', 'hris_employee_read', 'hris_employee_write', 'hris_group_read', 'hris_group_write', 'hris_payslip_read', 'hris_payslip_write', 'hris_timeoff_read', 'hris_timeoff_write', 'uc_call_read', 'storage_file_read', 'storage_file_write', 'webhook' ] },
	categories: { type: [ String ], enum: [ 'passthrough', 'hris', 'ats', 'auth', 'crm', 'enrich', 'martech', 'ticketing', 'uc', 'accounting', 'storage', 'commerce', 'payment' ], index: true }, // The Integration categories that this connection supports
	auth: { type: schemaConnectionAuth },
	is_paused: { type: Boolean }, // Whether this integration has exceed the monthly limit of the plan
	auth_aws_arn: { type: String }, // the AWS ARN / secretID for the stored auth field
	environment: { type: String, default: 'Production' },
	last_healthy_at: { type: Date },
	last_unhealthy_at: { type: Date },
	cursors_cache: { type: [ Object ] },
};

export const schemaIntegrationSupport = {
	methods: { type: Object },
	list_sort_by_name: { type: Boolean },
	list_sort_by_created_at: { type: Boolean },
	list_sort_by_updated_at: { type: Boolean },
	list_updated_gte: { type: Boolean },
	list_user_id: { type: Boolean },
	list_customer_id: { type: Boolean },
	list_company_id: { type: Boolean },
	list_contact_id: { type: Boolean },
	list_application_id: { type: Boolean },
	list_candidate_id: { type: Boolean },
	list_deal_id: { type: Boolean },
	list_job_id: { type: Boolean },
	list_invoice_id: { type: Boolean },
	list_order: { type: Boolean },
	list_query: { type: Boolean },
	list_limit: { type: Boolean },
	list_offset: { type: Boolean },
	search_twitter: { type: Boolean },
	search_name: { type: Boolean },
	search_linkedin_url: { type: Boolean },
	search_email: { type: Boolean },
	search_domain: { type: Boolean },
	inbound_fields: { type: Object },
	outbound_fields: { type: Object },
	webhook_events: { type: [ Object ] },
	list_parent_id: { type: Boolean },
	list_account_id: { type: Boolean },
	list_interview_id: { type: Boolean },
	list_list_id: { type: Boolean },
	list_ticket_id: { type: Boolean },
	list_collection_id: { type: Boolean },
	list_location_id: { type: Boolean },
	list_item_id: { type: Boolean },
	list_type: { type: Boolean },
};

export const schemaInvoice = {
};

export const schemaIssue = {
	created_at: { type: String },
	updated_at: { type: String },
	title: { type: String },
	status: { type: String, enum: [ 'COMPLETED', 'NEW', 'ROADMAP', 'IN_PROGRESS', 'ON_HOLD', 'VALIDATING', 'REJECTED' ] },
	url: { type: String },
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	type: { type: String, enum: [ 'BUG', 'FEATURE_REQUEST', 'INQUIRY' ] },
	resolution_time: { type: Number },
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
	event: { type: String, enum: [ 'USER_CREATED', 'USER_DELETED', 'CONNECTION_HEALTHY', 'CONNECTION_UNHEALTHY', 'CONNECTION_CREATED', 'CONNECTION_UPDATED', 'CONNECTION_DELETED', 'CONNECTION_PAUSED', 'CONNECTION_UNPAUSED', 'INTEGRATION_ACTIVATED', 'INTEGRATION_DEACTIVATED', 'INTEGRATION_UPDATED', 'WORKSPACE_UPDATED', 'WORKSPACE_OVER_LIMIT', 'WORKSPACE_80PERCENT_LIMIT', 'WEBHOOK_CREATED', 'WEBHOOK_DELETED' ] },
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
	updated_at: { type: Date },
	workspace_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Workspace' },
	connection_id: { type: SchemaTypes.ObjectId, index: true, ref: 'Integration' },
	hook_url: { type: String }, // The URL of the webhook
	object_type: { type: String, enum: [ 'accounting_account', 'accounting_transaction', 'accounting_contact', 'accounting_invoice', 'accounting_taxrate', 'accounting_organization', 'payment_payment', 'payment_link', 'payment_payout', 'payment_refund', 'commerce_item', 'commerce_collection', 'commerce_inventory', 'commerce_location', 'ats_activity', 'ats_application', 'ats_applicationstatus', 'ats_candidate', 'ats_document', 'ats_interview', 'ats_job', 'ats_scorecard', 'ats_company', 'crm_company', 'crm_contact', 'crm_deal', 'crm_event', 'crm_lead', 'crm_pipeline', 'hris_employee', 'hris_group', 'hris_payslip', 'hris_timeoff', 'martech_list', 'martech_member', 'passthrough', 'ticketing_note', 'ticketing_ticket', 'ticketing_customer', 'uc_contact', 'uc_call', 'enrich_person', 'enrich_company', 'storage_file' ] }, // The object to return (eg. CRM "contact")
	interval: { type: Number }, // The interval (in minutes) to check for updated/new objets.  Minimum is 5 minutes.  Interval is based off of 5-minute increments.
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
};

export const schemaWebhookData = {
	data: { type: [ Object ] }, // The data array will contact an array of specific objects according to the webhook's connection. (eg. CRM Contacts)
	webhook: { type: schemaWebhook }, // The webhook object
	nonce: { type: String }, // random string
	sig: { type: String }, // HMAC-SHA1(workspace.secret, data + nonce)
	type: { type: String, enum: [ 'INITIAL-PARTIAL', 'INITIAL-COMPLETE', 'VIRTUAL', 'NATIVE' ] },
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
	pem: { type: String }, // the PEM X.509 certificate in Base64 ASCII format
	key: { type: String }, // the private KEY X.509 certificate in Base64 ASCII format
	environment: { type: String, default: 'Production' }, // authentication environment
	categories: { type: [ String ], enum: [ 'passthrough', 'hris', 'ats', 'auth', 'crm', 'enrich', 'martech', 'ticketing', 'uc', 'accounting', 'storage', 'commerce', 'payment' ] },
	dev_api_key: { type: String },
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
	event_webhook_events: { type: [ String ], enum: [ 'USER_CREATED', 'USER_DELETED', 'CONNECTION_HEALTHY', 'CONNECTION_UNHEALTHY', 'CONNECTION_CREATED', 'CONNECTION_UPDATED', 'CONNECTION_DELETED', 'CONNECTION_PAUSED', 'CONNECTION_UNPAUSED', 'INTEGRATION_ACTIVATED', 'INTEGRATION_DEACTIVATED', 'INTEGRATION_UPDATED', 'WORKSPACE_UPDATED', 'WORKSPACE_OVER_LIMIT', 'WORKSPACE_80PERCENT_LIMIT', 'WEBHOOK_CREATED', 'WEBHOOK_DELETED' ] },
};


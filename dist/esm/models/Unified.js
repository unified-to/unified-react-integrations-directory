/*
Unified
==============
*/
export const ApiCallType = [
    'login',
    'webhook',
    'inbound'
];
export const IntegrationAuthType = [
    'oauth1',
    'oauth2',
    'other',
    'token'
];
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
    'genai'
];
export const IntegrationPermission = [
    'auth_login',
    'accounting_account_read',
    'accounting_account_write',
    'accounting_transaction_read',
    'accounting_transaction_write',
    'accounting_invoice_read',
    'accounting_invoice_write',
    'accounting_contact_read',
    'accounting_contact_write',
    'accounting_taxrate_read',
    'accounting_taxrate_write',
    'accounting_organization_read',
    'payment_payment_read',
    'payment_payment_write',
    'payment_payout_read',
    'payment_refund_read',
    'payment_link_read',
    'payment_link_write',
    'commerce_item_read',
    'commerce_item_write',
    'commerce_collection_read',
    'commerce_collection_write',
    'commerce_inventory_read',
    'commerce_inventory_write',
    'commerce_location_read',
    'commerce_location_write',
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
    'hris_payslip_read',
    'hris_payslip_write',
    'hris_timeoff_read',
    'hris_timeoff_write',
    'uc_call_read',
    'storage_file_read',
    'storage_file_write',
    'webhook',
    'genai_model_read',
    'genai_prompt_read',
    'genai_prompt_write'
];
export const IntegrationSupportWebhookType = [
    'virtual',
    'native'
];
export const IssueStatus = [
    'COMPLETED',
    'NEW',
    'ROADMAP',
    'IN_PROGRESS',
    'ON_HOLD',
    'VALIDATING',
    'REJECTED'
];
export const IssueType = [
    'BUG',
    'FEATURE_REQUEST',
    'INQUIRY'
];
export const ObjectType = [
    'accounting_account',
    'accounting_transaction',
    'accounting_contact',
    'accounting_invoice',
    'accounting_taxrate',
    'accounting_organization',
    'payment_payment',
    'payment_link',
    'payment_payout',
    'payment_refund',
    'commerce_item',
    'commerce_collection',
    'commerce_inventory',
    'commerce_location',
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
    'martech_list',
    'martech_member',
    'passthrough',
    'ticketing_note',
    'ticketing_ticket',
    'ticketing_customer',
    'uc_contact',
    'uc_call',
    'enrich_person',
    'enrich_company',
    'storage_file',
    'genai_model',
    'genai_prompt'
];
export const PlanTerm = [
    'monthly',
    'yearly'
];
export const SupportInboundType = [
    'supported-required',
    'supported',
    'not-supported'
];
export const SupportOutboundType = [
    'supported',
    'not-supported'
];
export const WebhookDataType = [
    'INITIAL-PARTIAL',
    'INITIAL-COMPLETE',
    'VIRTUAL',
    'NATIVE'
];
export const WebhookEvent = [
    'updated',
    'created',
    'deleted'
];
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
    'WEBHOOK_DELETED'
];
//# sourceMappingURL=Unified.js.map
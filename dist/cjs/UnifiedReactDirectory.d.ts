/// <reference types="react" />
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
    dc?: 'us' | 'eu';
}
export default function UnifiedDirectory(props: UnifiedDirectoryProps): JSX.Element;

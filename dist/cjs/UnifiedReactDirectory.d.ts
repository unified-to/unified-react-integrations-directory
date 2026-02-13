import React from 'react';
interface UnifiedDirectoryProps {
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
    dc?: 'us' | 'eu' | 'au';
}
export default function UnifiedDirectory(props: UnifiedDirectoryProps): React.JSX.Element;
export {};

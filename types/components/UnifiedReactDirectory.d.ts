export interface UnifiedDirectoryProps {
    workspaceId: string;
    categories?: string[];
    external_xref?: string;
    state?: string;
    scopes?: string[];
    success_redirect?: string;
    failure_redirect?: string;
    nostyle?: boolean;
}
declare const UnifiedDirectory: (props: UnifiedDirectoryProps) => Promise<JSX.Element>;
export default UnifiedDirectory;

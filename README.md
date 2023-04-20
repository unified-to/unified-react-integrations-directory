<h1>
    <a href="https://unified.to"><img src="https://unified.to/images/logo.png" /></a>
</h1>

# Unified.to's Integrations Directory Typescript React Component

## Installing

### Package manager

Using NPM:

```bash
$ npm install unifiedapi-react-directory
```

Using yarn:

```bash
$ yarn add unifiedapi-react-directory
```

Once the package is installed, you can import the component using `import`

```ts
import UnifiedDirectory from 'unifiedapi-react-directory';
```

## Example

```js
return (
    <>
        <h1>Integrations Directory</h1>
        <UnifiedDirectory workspaceId="12345" />
    </>
);
```

The following are the `props` that can be passed to the component:

```ts
{
    workspaceId: string;
    categories?: string[];
    external_xref?: string;
    state?: string;
    scopes?: string[];
    success_redirect?: string;
    failure_redirect?: string;
    nostyle?: boolean;
}
```

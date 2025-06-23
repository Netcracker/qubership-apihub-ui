1. `PortalPage` directory should stay in `@netcracker/qubership-apihub-ui-portal` package
2. `shared` directory inside `routes` should disappear
3. `hooks` & `workers` should disappear (now there is build problem when we move them to `ProjectEditorPage` component. It should be fixed after full migration to `@netcracker/qubership-apihub-api-processor`)
4. `entities` must be separated for 'portal' & 'editor' when `EditorPage` will be moved to `@netcracker/qubership-apihub-ui-editor`
5. `utils` should be moved to `@netcracker/qubership-apihub-ui-shared`
6. `components` at all (or mb part of them) should be moved to `@netcracker/qubership-apihub-ui-shared`

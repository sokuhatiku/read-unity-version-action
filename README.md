![build-test](https://github.com/sokuhatiku/read-unity-version-action/workflows/build-test/badge.svg)

# Read Unity version action

This action gets the version of Unity Editor required by your project and make it usable at after steps.

Supports Unity 5 or later project.

## Inputs

### `projectPath`
**Optional** The path to root of Unity project.

Default is root of repository.

## Outputs

### `editorVersion`

The version required by project.

## Example usage

```
uses: sokuhatiku/read-unity-version-action@v1
with:
  projectPath: 'your-unity-project'
```
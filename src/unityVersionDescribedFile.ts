import path from 'path'
import yaml from 'js-yaml'
import fs from 'fs'
import {UnityVersion} from './unityVersion'

export class UnityVersionDescribedFile {
  readonly version: UnityVersion

  private constructor(readonly filePath: string) {
    try {
      const fileContent = fs.readFileSync(filePath).toString()
      const yamlData = yaml.safeLoad(fileContent)

      const versionValue: string = yamlData['m_EditorVersion']
      if (versionValue == null) {
        throw Error('Version value is not defined.')
      }
      this.version = UnityVersion.Parse(versionValue)
    } catch (error) {
      throw new Error(
        `Version described file(${filePath}) has invalid format.\n${error}`
      )
    }
  }

  static ExploreSync(projectRootPath: string): UnityVersionDescribedFile {
    const targetPath = path.join(
      projectRootPath,
      'ProjectSettings/ProjectVersion.txt'
    )

    if (!fs.existsSync(targetPath)) {
      throw new Error(`Version described file(${targetPath}) did not found.`)
    }

    return new UnityVersionDescribedFile(targetPath)
  }
}

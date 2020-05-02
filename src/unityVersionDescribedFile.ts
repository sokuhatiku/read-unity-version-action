import path from 'path'
import yaml from 'js-yaml'
import fs from 'fs'
import {UnityVersion} from './unityVersion'

export class UnityVersionDescribedFile {
  readonly version: UnityVersion

  private constructor(readonly filePath: string) {
    const fileContent = fs.readFileSync(filePath).toString()
    const yamlData = yaml.safeLoad(fileContent)

    this.version = UnityVersion.Parse(yamlData['m_EditorVersion'])
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

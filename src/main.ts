import path from 'path'
import * as core from '@actions/core'
import {UnityVersionDescribedFile} from './unityVersionDescribedFile'

async function run(): Promise<void> {
  try {
    const projectPath = core.getInput('projectPath')
    if (projectPath.startsWith('/')) {
      throw new Error(
        `projectPath that rooted(${projectPath}) is not supported.`
      )
    }
    const workspacePath = process.env.GITHUB_WORKSPACE || ''
    const rootedProjectPath = path.join(workspacePath, projectPath)
    console.log(`project path is "${rootedProjectPath}"`)

    const versionFile = UnityVersionDescribedFile.ExploreSync(rootedProjectPath)
    const version = versionFile.version

    console.log(`project version is "${version}"`)
    core.setOutput('editorVersion', version.toString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

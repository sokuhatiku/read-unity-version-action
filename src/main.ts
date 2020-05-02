import * as core from '@actions/core'
import { UnityVersionDescribedFile } from './unityVersionDescribedFile'

async function run(): Promise<void> {
  try {
    const projectPath = core.getInput('projectPath') || process.env.GITHUB_WORKSPACE;
    if(!projectPath)
    {
      throw new Error('project path is undefined');
    }
    console.log(`project path is "${projectPath}"`);

    const versionFile = UnityVersionDescribedFile.ExploreSync(projectPath)
    const version = versionFile.version;

    console.log(`project version is "${version}"`);
    core.setOutput('editorVersion', version.toString());

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

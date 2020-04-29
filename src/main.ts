import * as core from '@actions/core'
import path from 'path'
import yaml from 'js-yaml'
import fs from 'fs'

async function run(): Promise<void> {
  try {
    const projectPath = core.getInput('projectPath') || process.env.GITHUB_WORKSPACE;
    if(!projectPath)
    {
      throw new Error('project path is undefined');
    }
    console.log(`project path is \"${projectPath}\"`);

    const versionFilePath =  path.join(projectPath, 'ProjectSettings/ProjectVersion.txt');
    const contents = fs.readFileSync(versionFilePath).toString();
    const parsed = yaml.safeLoad(contents);
    const editorVersion = parsed.m_EditorVersion as string;
    console.log(`project version is \"${editorVersion}\"`);

    core.setOutput('editorVersion', editorVersion);

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

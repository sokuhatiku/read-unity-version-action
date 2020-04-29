import * as core from '@actions/core'
import path from 'path'
import yaml from 'yaml'
import fs from 'fs'

async function run(): Promise<void> {
  try {
    const projectPath = core.getInput('projectPath') ?? process.env.GITHUB_WORKSPACE;
    console.log(`project path is ${projectPath}`);

    const versionFilePath =  path.join(projectPath, '/ProjectSettings/ProjectVersion.txt');
    const contents = fs.readFileSync(versionFilePath).toString();
    const parsed = yaml.parse(contents);
    const editorVersion = parsed.m_EditorVersion as string;

    core.setOutput('editorVersion', editorVersion);

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

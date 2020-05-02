import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('with projectPath input(5.6.1f1)', () => {
  const customEnv: NodeJS.ProcessEnv = {
    INPUT_PROJECTPATH: '__tests__/UnityProject_5.6.1f1'
  }

  expect(executeWithAdditionalEnv(customEnv)).toContain(
    'project version is [5.6.1f1]'
  )
})

test('with projectPath input(2019.3.8f1)', () => {
  const customEnv: NodeJS.ProcessEnv = {
    INPUT_PROJECTPATH: '__tests__/UnityProject_2019.3.8f1'
  }

  expect(executeWithAdditionalEnv(customEnv)).toContain(
    'project version is [2019.3.8f1]'
  )
})

test('with rooted path input', () => {
  const customEnv: NodeJS.ProcessEnv = {
    INPUT_PROJECTPATH: '/test-rooted-path'
  }

  expect(executeWithAdditionalEnv(customEnv)).toContain(
    'projectPath that rooted(/test-rooted-path) is not supported.'
  )
})

test('without path input(github workspace input)', () => {
  const customEnv: NodeJS.ProcessEnv = {
    GITHUB_WORKSPACE: '__tests__/UnityProject_2019.3.8f1'
  }

  expect(executeWithAdditionalEnv(customEnv)).toContain(
    'project version is [2019.3.8f1]'
  )
})

function executeWithAdditionalEnv(additionalEnv: NodeJS.ProcessEnv): string {
  const customEnv: NodeJS.ProcessEnv = Object.assign(additionalEnv, process.env)
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: customEnv
  }

  const result = cp.spawnSync('node', [ip], options)
  return result.output.toString()
}

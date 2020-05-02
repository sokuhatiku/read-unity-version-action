import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('with projectPath input(5.6.1f1)', () => {
  const customEnv:NodeJS.ProcessEnv = Object.assign(
    { INPUT_PROJECTPATH:'__tests__/UnityProject_5.6.1f1' },
    process.env
  )
  expect(execWithCustomEnv(customEnv))
    .toContain('::set-output name=editorVersion::5.6.1f1')
})

test('with projectPath input(2019.3.8f1)', () => {
  const customEnv:NodeJS.ProcessEnv = Object.assign(
    { INPUT_PROJECTPATH:'__tests__/UnityProject_2019.3.8f1' },
    process.env
  )
  expect(execWithCustomEnv(customEnv))
    .toContain('::set-output name=editorVersion::2019.3.8f1')
})

test('without projectPath input(5.6.1f1)', () => {
  const customEnv:NodeJS.ProcessEnv = Object.assign(
    { GITHUB_WORKSPACE:'__tests__/UnityProject_5.6.1f1' },
    process.env
  )
  expect(execWithCustomEnv(customEnv))
    .toContain('::set-output name=editorVersion::5.6.1f1')
})

test('without projectPath input(2019.3.8f1)', () => {
  const customEnv:NodeJS.ProcessEnv = Object.assign(
    { GITHUB_WORKSPACE:'__tests__/UnityProject_2019.3.8f1' },
    process.env
  )
  expect(execWithCustomEnv(customEnv))
    .toContain('::set-output name=editorVersion::2019.3.8f1')
})

test('without anything', () => {
  const customEnv:NodeJS.ProcessEnv = process.env
  expect(() => execWithCustomEnv(customEnv))
  .toThrowError()
})

test('with invalid directory', () => {
  const customEnv:NodeJS.ProcessEnv = Object.assign(
    { INPUT_PROJECTPATH:'__tests__/UnityProject_NotExistsProject' },
    process.env
  )
  expect(() => execWithCustomEnv(customEnv))
  .toThrowError()
})

test('with invalid format', () => {
  const customEnv:NodeJS.ProcessEnv = Object.assign(
    { INPUT_PROJECTPATH:'__tests__/UnityProject_InvalidVersionFormat' },
    process.env
  )
  expect(() => execWithCustomEnv(customEnv))
  .toThrowError()
})

function execWithCustomEnv(customEnv:NodeJS.ProcessEnv):string{
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: Object.assign(customEnv, process.env)
  }
  return cp.execSync(`node ${ip}`, options).toString()
}
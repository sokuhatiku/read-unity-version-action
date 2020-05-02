import {UnityVersionDescribedFile} from '../src/unityVersionDescribedFile'

test('5.6.1f1 project', () => {
  UnityVersionDescribedFile.ExploreSync('__tests__/UnityProject_5.6.1f1')
})

test('2019.3.8f1 project', () => {
  UnityVersionDescribedFile.ExploreSync('__tests__/UnityProject_2019.3.8f1')
})

test('not exists project', () => {
  expect(() =>
    UnityVersionDescribedFile.ExploreSync(
      '__tests__/UnityProject_NotExistsProject'
    )
  ).toThrowError(/Version described file\(.*\) did not found\./)
})

test('invalid format project', () => {
  expect(() =>
    UnityVersionDescribedFile.ExploreSync(
      '__tests__/UnityProject_InvalidVersionFormat'
    )
  ).toThrowError(/Version described file\(.*\) has invalid format\./)
})

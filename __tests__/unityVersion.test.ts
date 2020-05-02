import {UnityVersion} from '../src/unityVersion'

test('Unity 5 Versioning', () => {
  UnityVersion.Parse('5.0.0f4')
  UnityVersion.Parse('5.6.7f1')
})

test('Unity 2017 or lator Versioning', () => {
  UnityVersion.Parse('2017.1.0f3')
  UnityVersion.Parse('2017.4.39f1')
  UnityVersion.Parse('2018.1.0f2')
  UnityVersion.Parse('2018.4.22f1')
  UnityVersion.Parse('2019.1.0f2')
  UnityVersion.Parse('2019.3.12f1')
})

test('Beta and alpha releases', () => {
  UnityVersion.Parse('2020.1.0b7')
  UnityVersion.Parse('2020.2.0a9')
})

test('Unity 4 or earyer releases are not supported', () => {
  expect(() => UnityVersion.Parse('3.4.0')).toThrowError()
  expect(() => UnityVersion.Parse('3.5.7')).toThrowError()
  expect(() => UnityVersion.Parse('4.0.0')).toThrowError()
  expect(() => UnityVersion.Parse('4.7.2')).toThrowError()
})

import {UnityVersion} from '../src/unityVersion'

test('Unity 5 Versioning', () => {
  expect(UnityVersion.Parse('5.0.0f4').toString()).toBe('5.0.0f4')
  expect(UnityVersion.Parse('5.6.7f1').toString()).toBe('5.6.7f1')
})

test('Unity 2017 or lator Versioning', () => {
  expect(UnityVersion.Parse('2017.1.0f3').toString()).toBe('2017.1.0f3')
  expect(UnityVersion.Parse('2017.4.39f1').toString()).toBe('2017.4.39f1')
  expect(UnityVersion.Parse('2018.1.0f2').toString()).toBe('2018.1.0f2')
  expect(UnityVersion.Parse('2018.4.22f1').toString()).toBe('2018.4.22f1')
  expect(UnityVersion.Parse('2019.1.0f2').toString()).toBe('2019.1.0f2')
  expect(UnityVersion.Parse('2019.3.12f1').toString()).toBe('2019.3.12f1')
})

test('Beta and alpha releases', () => {
  expect(UnityVersion.Parse('2020.1.0b7').toString()).toBe('2020.1.0b7')
  expect(UnityVersion.Parse('2020.2.0a9').toString()).toBe('2020.2.0a9')
})

test('Unity 4 or earyer releases are not supported', () => {
  expect(() => UnityVersion.Parse('3.4.0')).toThrowError()
  expect(() => UnityVersion.Parse('3.5.7')).toThrowError()
  expect(() => UnityVersion.Parse('4.0.0')).toThrowError()
  expect(() => UnityVersion.Parse('4.7.2')).toThrowError()
})

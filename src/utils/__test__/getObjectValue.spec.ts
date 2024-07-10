import { describe, it } from 'vitest'
import { getObjectValue } from '../getObjectValue'

describe('getObjectValue', () => {
  it('return correct value with key and obj empty', async ({ expect }) => {
    const obj = {}
    expect(getObjectValue('', obj)).toBe(obj)
  })

  it('return correct value with key and obj', async ({ expect }) => {
    const obj = { test: 'asd' }
    expect(getObjectValue('test', obj)).toBe(obj['test'])
  })

  it('return correct value with key and obj', async ({ expect }) => {
    const test = {}
    const obj = { test }
    expect(getObjectValue('test', obj)).toBe(obj['test'])
  })

  it('return correct value with key and obj nested', async ({ expect }) => {
    const test = { test: 'test' }
    const obj = { test }
    console.log(getObjectValue('test.test', obj))
    expect(getObjectValue('test.test', obj)).toBe(obj['test']['test'])
  })
})

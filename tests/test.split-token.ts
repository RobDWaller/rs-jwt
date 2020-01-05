import { SplitToken } from '../src/split-token'
import { assert } from 'chai'
import { describe, it } from 'mocha'

describe('Split Token Class', () => {
  it('Should return a Split Token object', () => {
    const token = new SplitToken('abc', 'def', 'hij')

    assert.instanceOf(token, SplitToken, 'token is an instance of SplitToken')
  })

  it('Should set a null signature and return a Split Token object', () => {
    const token = new SplitToken('abc', 'def', null)

    assert.instanceOf(token, SplitToken, 'token is an instance of SplitToken')
  })
})

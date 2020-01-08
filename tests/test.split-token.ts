import { SplitToken } from '../src/split-token'
import { assert, expect } from 'chai'
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

  it ('Should set the header, payload and signature and return the data via getters', () => {
    const token = new SplitToken('abc', 'def', 'hij')

    expect(token.getHeader()).to.equal('abc');
    expect(token.getPayload()).to.equal('def');
    expect(token.getSignature()).to.equal('hij');
  })
})

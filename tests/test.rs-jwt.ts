import { RSJwt } from '../src/rs-jwt'
import { expect, assert } from 'chai'
import { SplitToken } from '../src/split-token'
import { describe, it } from 'mocha'

describe('Really Simple JWT', () => {
  it('Should return a JWT payload object', () => {
    const jwt = new RSJwt()

    const result = jwt.getPayload()

    expect(result).to.equal('Hello World')
  })

  it('Should split a JWT and return a SplitToken object.', () => {
    const jwt = new RSJwt()

    const result = jwt.splitToken('abc.def.hij')

    assert.instanceOf(result, SplitToken)
  })
})

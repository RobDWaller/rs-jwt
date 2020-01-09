import { Jwt } from '../src/jwt'
import { expect, assert } from 'chai'
import { describe, it } from 'mocha'

describe('JWT Object', () => {
  it('Should return a header object.', () => {
    const jwt = new Jwt({}, {}, '')

    const result = jwt.getHeader()

    assert.instanceOf(result, Object)
  })

  it('Should return a payload object.', () => {
    const jwt = new Jwt({}, {}, '')

    const result = jwt.getPayload()

    assert.instanceOf(result, Object)
  })

  it('Should return a signature string.', () => {
    const jwt = new Jwt({}, {}, '123')

    const result = jwt.getSignature()

    expect(result).to.equal('123')
  })
})

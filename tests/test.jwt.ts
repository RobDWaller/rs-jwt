import { Jwt } from '../src/jwt'
import { expect, assert } from 'chai'
import { describe, it } from 'mocha'

describe('JWT Object', () => {
  it('Should return a header object', () => {
    const header = {}
    const payload = {}
    const signature = ''

    const jwt = new Jwt(header, payload, signature)

    const result = jwt.getHeader()

    assert.instanceOf(result, Object)
  })

  it('Should return a payload object', () => {
    const header = {}
    const payload = {}
    const signature = ''

    const jwt = new Jwt(header, payload, signature)

    const result = jwt.getPayload()

    assert.instanceOf(result, Object)
  })

  it('Should return a signature string', () => {
    const header = {}
    const payload = {}
    const signature = '123'

    const jwt = new Jwt(header, payload, signature)

    const result = jwt.getSignature()

    expect(result).to.equal('123')
  })
})

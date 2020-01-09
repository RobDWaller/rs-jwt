import { RSJwt } from '../src/rs-jwt'
import { expect, assert } from 'chai'
import { SplitToken } from '../src/split-token'
import { Jwt } from '../src/jwt'
import { describe, it } from 'mocha'

describe('Really Simple JWT', () => {
  it('Should split a JWT and return a SplitToken object.', () => {
    const jwt = new RSJwt()

    const result = jwt.splitToken('abc.def.hij')

    assert.instanceOf(result, SplitToken)
  })

  it('Should split a JWT and get payload should be accessible.', () => {
    const jwt = new RSJwt()

    const result = jwt.splitToken('abc.def.hij')

    expect(result.getPayload()).to.equal('def')
  })

  it('Should change Base64Url string to Base64 string', () => {
    const jwt = new RSJwt()

    const result = jwt.toBase64('a-b_c')

    expect(result).to.equal('a+b/c')
  })

  it('Should add padding to Base64 string which is not long enough', () => {
    const jwt = new RSJwt()

    const result = jwt.addPadding('ab')

    expect(result).to.equal('ab==')
  })

  it('Should decode a base64 string to a text string', () => {
    const jwt = new RSJwt()

    const result = jwt.base64Decode('aGVsbG8=')

    expect(result).to.equal('hello')
  })

  it('Should decode token part to a JSON string.', () => {
    const jwt = new RSJwt()

    const result = jwt.decode('eyJjdHkiOiJKV1QiLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')

    expect(result).to.equal('{"cty":"JWT","alg":"HS256","typ":"JWT"}')
  })

  it('Should parse a JWT token string to a JWT Object', () => {
    const jwt = new RSJwt()

    const result = jwt.parse('eyJjdHkiOiJKV1QiLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJpc3MiOiJmYWtlcnMudGVzdCIsImF1ZCI6Imh0dHA6XC9cL2Zha2Vycy50ZXN0IiwiZXhwIjoxNTc' +
    '0NjY3OTQ2LCJpYXQiOjE1NzQ2NjcwNDYsInVzZXJfaWQiOiIzMTM4NjE2MiJ9.KqTrVOzyfJoRVUbc' +
    '41HaVP41e6HTkPeWzg9QP7VrCsk')

    assert.instanceOf(result, Jwt)
  })
})

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
})

import { Base64 } from 'js-base64'
import { SplitToken } from './split-token'
import { Jwt } from './jwt'

/**
 * Parse a JSON Web Token to a JavaScript object which allows you to easily
 * access claims in the header and payload.
 *
 * @author Rob Waller <rdwaller1984@gmail.com>
 */
export class RSJwt {
  public parse (token: string): Jwt {
    const split = this.splitToken(token)

    return new Jwt(
      JSON.parse(this.decode(split.getHeader())),
      JSON.parse(this.decode(split.getPayload())),
      split.getSignature()
    )
  }

  /**
   * Split the JWT token string into it's three parts, header, payload
   * and signature so they can be decoded individually.
   */
  private splitToken (token: string): SplitToken {
    const parts = token.split('.')

    return new SplitToken(parts[0], parts[1], parts[2])
  }

  /**
   * Decode JWT token part from a Base64Url string a JSON string.
   */
  private decode (base64Url: string): string {
    let base64 = this.toBase64(base64Url)
    base64 = this.addPadding(base64)
    return this.base64Decode(base64)
  }

  /**
   * Convert a Base64Url string to a Base64 string.
   */
  private toBase64 (base64Url: string): string {
    return base64Url.replace('-', '+').replace('_', '/')
  }

  /**
   * When a string is converted from Base64Url to Base64 padding characters can
   * be lost, this methods adds them back.
   */
  private addPadding (base64: string): string {
    if (base64.length % 4 !== 0) {
      return this.addPadding(base64 + '=')
    }

    return base64
  }

  /**
   * Convert a Base64 string to a plain text string.
   */
  private base64Decode (base64: string): string {
    return Base64.decode(base64)
  }
}

/**
 * "Value object" returned after the JWT token string is parsed. 
 * Contains the parsed JWT header and payload objects along with the JWT 
 * signature string. This makes it easier for developers to access 
 * the JWT claims.
 */
export class Jwt {
  private header: object

  private payload: object

  private signature: string | null

  constructor (header: object, payload: object, signature: string | null) {
    this.header = header
    this.payload = payload
    this.signature = signature
  }

  public getHeader (): any {
    return this.header
  }

  public getPayload (): any {
    return this.payload
  }

  public getSignature (): string | null {
    return this.signature
  }
}

/**
 * Wrapper class which contains the parsed JWT header and payload objects along
 * with the JWT signature string.
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

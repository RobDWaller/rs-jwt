/**
 * "Value Object" returned after the JWT token string is split. Contains the
 * header, payload and signature strings.
 */
export class SplitToken {
  private header: string

  private payload: string

  private signature: string | null

  constructor (header: string, payload: string, signature: string | null) {
    this.header = header

    this.payload = payload

    this.signature = signature
  }

  public getHeader (): string {
    return this.header
  }

  public getPayload (): string {
    return this.payload
  }

  public getSignature (): string | null {
    return this.signature
  }
}

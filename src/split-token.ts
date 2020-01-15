/**
 * Wrapper class which contains the header, payload and signature strings once 
 * the JWT token string has been split.
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

  getHeader (): string {
    return this.header
  }

  getPayload (): string {
    return this.payload
  }

  getSignature (): string | null {
    return this.signature
  }
}

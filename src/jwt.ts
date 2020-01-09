export class Jwt {
  private header: Object

  private payload: Object

  private signature: string | null

  constructor (header: Object, payload: Object, signature: string | null) {
    this.header = header
    this.payload = payload
    this.signature = signature
  }

  getHeader (): Object {
    return this.header
  }

  getPayload (): Object {
    return this.payload
  }

  getSignature (): string | null {
    return this.signature
  }
}

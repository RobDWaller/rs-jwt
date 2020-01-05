export class SplitToken {
  private header: string

  private payload: string

  private signature: string | null

  constructor (header: string, payload: string, signature: string | null) {
    this.header = header

    this.payload = payload

    this.signature = signature
  }
}

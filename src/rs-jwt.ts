export class RSJwt {
  getPayload(): string {
    return 'Hello World';
  }

  splitToken(token: string) {
    let parts = token.split(".");

    return {
      header: parts[0],
      payload: parts[1],
      signature: parts[2]
    }
  }
}
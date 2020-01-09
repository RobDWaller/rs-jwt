import { Base64 } from 'js-base64';
import { SplitToken } from './split-token'

export class RSJwt {
  getPayload (): string {
    return 'Hello World'
  }

  splitToken (token: string): SplitToken {
    const parts = token.split('.')

    return new SplitToken(parts[0], parts[1], parts[2])
  }

  toBase64 (base64Url: string): string {
    return base64Url.replace('-', '+').replace('_', '/')
  }

  addPadding (base64: string): string {
    if (base64.length % 4 !== 0) {
      return this.addPadding(base64 + '=')
    }

    return base64
  }

  base64Decode(base64: string): string {
    return Base64.decode(base64)
  }
}

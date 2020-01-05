import {SplitToken} from './split-token';

export class RSJwt {
  getPayload(): string {
    return 'Hello World';
  }

  splitToken(token: string): SplitToken {
    let parts = token.split(".");

    return new SplitToken(parts[0], parts[1], parts[2]);
  }
}
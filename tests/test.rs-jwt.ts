import { RSJwt } from '../src/rs-jwt';
import { expect } from 'chai';
import 'mocha';

describe('Random Number List', () => {

  it('Should return a JWT payload object', () => {
    let jwt = new RSJwt();

    let result = jwt.getPayload();
    
    expect(result).to.equal('Hello World');
  });
});
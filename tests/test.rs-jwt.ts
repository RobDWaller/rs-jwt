import { RSJwt } from '../src/rs-jwt';
import { expect } from 'chai';
import 'mocha';

describe('Really Simple JWT', () => {

  it('Should return a JWT payload object', () => {
    let jwt = new RSJwt();

    let result = jwt.getPayload();
    
    expect(result).to.equal('Hello World');
  });

  it('Should split a JWT and return the three parts.', () => {
    let jwt = new RSJwt();

    let result = jwt.splitToken('abc.def.hij');

    expect(result.header).to.equal('abc');
    expect(result.payload).to.equal('def');
    expect(result.signature).to.equal('hij');
  });
});
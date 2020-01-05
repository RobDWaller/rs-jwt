import { RSJwt } from '../src/rs-jwt';
import { expect, assert } from 'chai';
import {SplitToken} from '../src/split-token';
import 'mocha';

describe('Really Simple JWT', () => {

  it('Should return a JWT payload object', () => {
    let jwt = new RSJwt();

    let result = jwt.getPayload();
    
    expect(result).to.equal('Hello World');
  });

  it('Should split a JWT and return a SplitToken object.', () => {
    let jwt = new RSJwt();

    let result = jwt.splitToken('abc.def.hij');

    assert.instanceOf(result, SplitToken);
  });
});
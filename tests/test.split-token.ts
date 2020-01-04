import { SplitToken } from '../src/split-token';
import { expect, assert } from 'chai';
import 'mocha';

describe('Split Token Class', () => {
  it('Should return a Split Token object', () => {
    let token = new SplitToken('abc', 'def', 'hij');
    
    assert.instanceOf(token, SplitToken, 'token is an instance of SplitToken');
  });

  it('Should set a null signature and return a Split Token object', () => {
    let token = new SplitToken('abc', 'def', null);

    assert.instanceOf(token, SplitToken, 'token is an instance of SplitToken');
  });
});
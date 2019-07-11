import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {input} from '../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

describe('Main', () => {

  context('Smoke Tests', () => {
    
    it('Should be exist an function input()', () => {
      expect(input).to.exist;
    });

    it('Should be an function', () => {
      expect(input).to.be.an('function');
    });

  });

  context('Message input', () => {
    it('Should be return an msg', () => {
      const msg = input('Test message');
      expect(msg).to.be.equal('Test message')
    });
  });

});


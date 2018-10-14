const { expect } = require('chai');
const { say } = require('../hello');

describe('Say hello', () => {
  it('logs "Hello world!"', () => {
    let output = '';
    const log = str => {
      output = str;
    };
    say(log);
    expect(output).to.equal('Hello world!');
  });
});

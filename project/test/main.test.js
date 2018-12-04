var assert = require('assert');
adder = require('../src/main').add
console.log(adder)

describe('main', function() {
  describe('#add()', function() {
    it('should add two numbers together', function() {
      assert.equal(adder(2,3), 5);
      assert.equal(adder(3,3), 6);
      assert.equal(adder(2,37), 39);
    });
  });
});

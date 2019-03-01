var assert = require('assert');
const coder = require('../other/morse/coder');
const decoder = require('../other/morse/decoder');
describe('Array', function() {
  describe('Test morse code/decode', function() {
    it('should be true', function() {
      assert.equal(coder('SOS SOS SOS'),'... --- ...   ... --- ...   ... --- ...');
    });
    it('should be true', function() {
      assert.equal(coder('   SOS SOS SOS '),'... --- ...   ... --- ...   ... --- ...');
    });
    it('should be true', function() {
      assert.equal(coder('sos sos sos'),'... --- ...   ... --- ...   ... --- ...');
    });
    
    it('should be true', function() {
      assert.notEqual(coder('sos sos so'),'... --- ...   ... --- ...   ... --- ...');
    });
  });
});
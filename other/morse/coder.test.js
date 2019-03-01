var assert = require('assert');
const coder = require('./coder');
const decoder = require('./decoder');
test('correct coder work expected', ()=> {
    expect(coder('SOS SOS SOS')).toBe('... --- ...   ... --- ...   ... --- ...');
    expect(coder(' SOS SOS SOS')).toBe('... --- ...   ... --- ...   ... --- ...');
    expect(coder(' sos sos sos')).toBe('... --- ...   ... --- ...   ... --- ...');
    expect(coder(' sos sos')).not.toBe('... --- ...   ... --- ...   ... --- ...');
});
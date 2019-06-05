function vowelConsonant(inp) {
  if (typeof inp !== 'string') throw new Error('Argument must be a string.');
  const volve = inp.match(/[aeiou]/gi);
  const consonant = inp.match(/[bcdfghjklmnpqrstvxzwy]/gi);
  return [volve.length, consonant.length]
}

module.exports = vowelConsonant;
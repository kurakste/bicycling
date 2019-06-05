function palindrom(input) {
  if (typeof input !== 'string') throw new Error('Argument must be as string.');
  const a1 = input
    .toLocaleLowerCase()
    .replace(/\s+/g, '');
  const a2 =
    input
      .toLocaleLowerCase()
      .replace(/\s+/g, '')
      .split('')
      .reverse()
      .join('');
  return (a1 === a2);
}

module.exports = palindrom;
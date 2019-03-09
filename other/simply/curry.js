// TODO: I need to undestend it. 

Function.prototype.curry = function() {
  if (arguments.length < 1) return this;
  const self = this; 
  const args = Object.toArray(arguments); 
  return function() {
    return self.apply(this, args)
  }
}
const mySingltone = (function (){
  let instance;
  function init() {
    const privateVariable = 'I\'m rpivaate variable';
    const privateRandomNuber = Math.random();
    return {
      publicMethod: function() {
        console.log('I\'m a public method');
      },
      publicProperty: 'I\'m a public property!',
      getRandomNumber: function() {
        return privateRandomNuber;
      },
    };
  };
  return {
    getInstance: function() {
      if (!instance) instance = init();
      return instance;
    }
  };
})();

const obj1 = mySingltone.getInstance();
const obj2 = mySingltone.getInstance();

console.log(obj1.publicProperty);
console.log(obj1.getRandomNumber());
console.log(obj1.getRandomNumber());
console.log(obj1 === obj2);
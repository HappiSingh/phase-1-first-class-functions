
function receivesAFunction (cb) {
    return(cb());
  }
//  receivesAFunction(function () { return "Hello, I\'m a callback"});
  receivesAFunction( () => "Hello, I\'m a callback");


  function returnsANamedFunction () {
    return function hi() {
        return "Hi";
    }
  }

  function returnsAnAnonymousFunction () {
    return function () {
        return "Bye";
    }
  }
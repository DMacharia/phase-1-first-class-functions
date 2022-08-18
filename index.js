function receivesAFunction(callback) {
  return callback();
}
receivesAFunction(function () {
  console.log(`I am learning JS`);
});

function returnsANamedFunction() {
  const namedFunction = function () {
    return "Hello World";
  };
  return namedFunction;
}
returnsANamedFunction()();

function returnsAnAnonymousFunction() {
  return function () {
    return "This is an anonymous function";
  };
}
returnsAnAnonymousFunction()();

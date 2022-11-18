function flip(fn) {
  return function flipped(arg1, arg2, ...args) {
    return fn(arg2, arg1, ...args);
  };
}

function f(...args) {
  return args;
}

const flipArg = flip(f);
console.log(flipArg(1, 2, 3));

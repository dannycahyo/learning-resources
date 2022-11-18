function spreadFunction(fn) {
  return function spreadArgs(args) {
    return fn(...args);
  };
}

function unspreadFunction(fn) {
  return function unspreadArgs(...args) {
    return fn(args);
  };
}

function f(w, x, y, z) {
  return w + x + y + z;
}

function f2(...args) {
  return args;
}

const apply = spreadFunction(f);
const unapply = unspreadFunction(f2);
console.log(apply([12, 3, 45, 5]));
console.log(unapply([1, 2]));

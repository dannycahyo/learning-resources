function unary(fn) {
  return function one(a) {
    return fn(a);
  };
}

function binary(fn) {
  return function two(a, b) {
    return fn(a, b);
  };
}

function f(...args) {
  return args;
}

const g = unary(f);
const h = binary(f);

console.log(g(1, 2, 3, 4));
console.log(h(1, 2, 2, 4));

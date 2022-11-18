function isOdd(v) {
  return v % 2 === 1;
}

function isEven(v) {
  return !isEven(v);
}

console.log(isOdd(4));

function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

const isEven2 = not((v) => isOdd(v));
const isEven3 = not(isOdd);

console.log(isEven3(4));

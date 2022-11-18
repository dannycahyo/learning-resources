function mod(y) {
  return function forX(x) {
    return x % y;
  };
}

function eq(y) {
  return function forX(x) {
    return x === y;
  };
}

const mod2 = mod(2);
const eq1 = eq(1);

function isOdd(v) {
  return eq1(mod2(v));
}

function compose(fn1, fn2) {
  return function composed(v) {
    return fn1(fn2(v));
  };
}

const isOdd2 = compose(eq1, mod2);
const isOdd3 = compose(eq(1), mod(2));

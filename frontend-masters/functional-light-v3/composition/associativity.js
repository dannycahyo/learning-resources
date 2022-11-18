const minus2 = (x) => x - 2;
const triple = (x) => x * 3;
const increment = (x) => x + 1;

function composeTwo(fn2, fn1) {
  return function composed(v) {
    return fn2(fn1(v));
  };
}

const f = composeTwo(composeTwo(minus2, triple), increment);

const p = composeTwo(minus2, composeTwo(triple, increment));

console.log(p(4));

console.log(f(4));

// WE HAVE THE SAME RESULT

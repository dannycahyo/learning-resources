function curry(totalArg, fn) {
  const args = [];
  return function inner(arg) {
    args.push(arg);
    if (args.length === totalArg) return fn(...args);
    return inner;
  };
}

const add = (x, y) => x + y;
console.log(add.length);

const curriedAdd = curry(2, add);
const add1 = curriedAdd(1);
const five = add1(4);

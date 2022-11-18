function f(...args) {
  return args;
}

function reversedArg(fn) {
  return function reversed(...args) {
    return fn(...args.reverse());
  };
}
const reversArg = reversedArg(f);
console.log(reversArg(1, 2, 3));

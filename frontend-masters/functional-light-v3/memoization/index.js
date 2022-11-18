function repeated(count) {
  let str;
  return function () {
    if (str === undefined) {
      str = "".padStart(count, "A");
    }
    return str;
  };
}

const A10 = repeated(10);
console.log(A10());
console.log(A10());

/* Using the memoize function utility */
function repeated2(count) {
  return memoize(function () {
    return "".padStart(count, "A");
  });
}

/* Lazy or Deffer */

function lazyRepeater(count) {
  return function () {
    return "".padStart(count, "A");
  };
}

const A10 = lazyRepeater(10);
console.log(A10());

/*
Pros =>
- We're not do the work when the A10 is called, 
that said if we're not sure that in all conditions the function was ever gonna be called

Cons =>
- If we execute the A10 multiple times, we're gonna do the work every time the function is called
*/

/* Eager  */
function eagerRepeater(count) {
  const str = "".padStart(count, "A");
  return function () {
    return str;
  };
}

const A20 = lazyRepeater(15);
console.log(A20());

/*
Pros =>
- If we execute the A20 multiple times, we don't have to the calculation every time the function is called
Because it's already done in the first place. So we're caching it.

Cons =>
- If we just call the function rarely, so we will just waste of time doing the work
*/

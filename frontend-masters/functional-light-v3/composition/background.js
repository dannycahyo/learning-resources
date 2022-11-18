let basePrice = 0;

const minus2 = (x) => x - 2;
const triple = (x) => x * 3;
const increment = (x) => x + 1;

let tmp = increment(4);
tmp = triple(tmp);
let totalCost = basePrice + minus2(tmp);

/*
Then there's a problem that our competitor produce more chocolate than we are.
We don't have enough space or room
We need to be more faster
*/

totalCost = basePrice + minus2(triple(increment(4)));

/*
Now we have so much room to use and can produce more chocolate
But then the boss come and say here our line worker get confused because
    - There are to many wires
    - So much button to push 
Then the question, can you make a single machine that produce a machine that receiving
one input and produce a chocolate
*/

function shippingRate(input) {
  return minus2(triple(increment(input)));
}

/*
Then the boss come again and complainging about that our competitor produce new 
variants of chocolate can you make it too. Can you make a machine that produce a machine 
for different purposes
*/

function composeThree(fn3, fn2, fn1) {
  return function composed(v) {
    return fn3(fn2(fn1(v)));
  };
}

const shippingRate2 = composeThree(minus2, triple, increment);

totalCost = basePrice + shippingRate2(4);

const p = composeThree(minus2, triple, increment);
const f = composeThree(triple, increment, minus2);

/*
COMPOSTITION  => RIGHT TO LEFT
PIPING => LEFT TO RIGHT
*/

// Function can be returned from another function
function createFunction() {
  function multiplyBy2(num) {
    num * 2;
  }

  return multiplyBy2;
}

const generateFunc = createFunction(); // it's actually equal to inner function of createFunction => multiplyBy2
const result = generateFunc(2); // See ? now the generateFunc accept one argument

// Calling a function in the same function call as it was defined
function outer() {
  let counter = 0; // This variable seems not needed and used, but it's actually accesible to the inner function
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

const result2 = outer();

var counter = 0;
// Calling a function outside of the function call in which it was defined
function outer2() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log("Inner", counter);
  }
  console.log(counter);
  return incrementCounter;
}

const myNewFunction = outer2();
myNewFunction();
myNewFunction();

const otherFunction = outer2();
otherFunction();
otherFunction();

console.log("Outer Counter", counter);

// More Examples
function createCounter() {
  let counter = 0;
  const myFunction = () => {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3);

// Partial Aplication
let c = 4;
const addX = (x) => (n) => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log("example partial application", d);

/*
let c = 4
function addX(x) {
  return function(n) {
     return n + x
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)
*/

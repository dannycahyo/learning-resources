/*
==== JavaScript Principles 

When javaScript code runs, it execute line by line of our code, we also known that as execution context.
Saves ‘data’ like strings and arrays so we can use that data later - in its memory We can even save code (‘functions’)

==== CallStack
We add new call stack when we run a function (outer)
If inside that function we run a function  (inner), we add new stack on top of previous stack
After the function finish to be executed, javaScript pop up from the callstacks
*/

const num = 2;
const multiplyByTwo = (input) => {
  input * 2;
};

const output = multiplyByTwo(num);
const newOutput = multiplyByTwo(10);

function foo(b) {
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  let y = 3;
  return foo(x * y);
}

const baz = bar(7);

console.log(baz);

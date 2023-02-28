"use strict";

// Important Notes: If we are using arrow functions we will not get the this binding
// Instead, the arrow functions will be referencing the this binding of the parent scope

console.log(this);

// If we use strict mode, the value of this will be undefined
function logThis() {
  console.log(this);
}

const obj = {
  num: 20,
  logThis,
};

obj.logThis();

// Let's see what happend in the event listeners

const button = document.querySelector("button");

button.addEventListener("click", logThis);

// Bind This

const obj2 = {
  num: 10,
};

function logThis2(x, y) {
  console.log(this);
  console.log(x, y);
}

const boundLogThis = logThis2.bind(obj2);

boundLogThis(10, 20);

// We can also pass the parameters to the bind call
const boundLogThis2 = logThis2.bind(obj2, "Cok ", 20);

boundLogThis2();

// If we want to call the function directly instead of returning a new function
// We can use the call method

logThis2.call(obj2, "COK", "COK@");

// If we use apply, we need to pass the parameters as an array
logThis2.apply(obj2, ["COK", "COK@"]);

// Array functions
[1, 2, 3].forEach(
  function (num) {
    console.log(this);
    console.log(num);
  },
  { num: 100 } // This will be the this binding for the function
);

// How about class

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello I am " + this.name);
  }
}

const cok = new Person("Cok");
const jane = new Person("Jane");

cok.sayHello();
jane.sayHello();

"use strict";

function not(fun) {
  return function negated(...args) {
    return !fun(...args);
  };
}

// function output(txt) {
//   console.log(txt);
// }

// function printIf(shouldPrintIt) {
//   return function (msg) {
//     if (shouldPrintIt(msg)) {
//       output(msg);
//     }
//   };
// }

function isShortEnough(str) {
  return str.length <= 5;
}

function when(fn) {
  return function (predicate) {
    return function (...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

const output = console.log.bind(console);
const printIf = when(output); // Not point free
const printIf2 = when((p) => output(p)); // Not point free
const isLongEnough = not(isShortEnough);
const isLongEnough2 = not((arg) => isShortEnough(arg)); // Not point free

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World

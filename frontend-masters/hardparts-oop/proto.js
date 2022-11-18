/**
 * JavaScript uses this proto link to give objects, functions and arrays a bunch of bonus functionality.
 * All objects by default have __proto__
 */

const obj = {
  num: 10,
};

obj.num;

console.log(obj.hasOwnProperty("num"));

Object.prototype;

/**
 * Array and functions are also objects
 * so they get access to all the functions in Object.prototype
 */

function multipyBy2(num) {
  return num * 2;
}

console.log(multipyBy2.toString());

Function.prototype;

// Notice that this function also has acces to Object.prototype, because it look up to __proto__
console.log(multipyBy2.hasOwnProperty("score"));

// multipyBy2.prototype.__proto__

console.log(Object.getPrototypeOf(multipyBy2));

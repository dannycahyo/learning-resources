// Challenge 1
const addTwo = (num) => num + 2;

// To check if you've completed this function, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
const addS = (word) => word + "s";

// Uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
const map = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

console.log(map([1, 2, 3], addTwo));

// Challenge 4
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// See for yourself if your forEach works!
forEach([2, 4, 5, 6], (num) => {
  console.log(num);
});

// Challenge 5
const mapWithIndex = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], index));
  }
  return newArray;
};

// Challenge 6
const reduce = (array, callback, initialValue) => {
  let memoized = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (memoized === undefined) {
      memoized = array[0];
    }
    memoized = callback(memoized, array[i]);
  }
  return memoized;
};

console.log(reduce([2, 3, 4, 5], (acc, num) => acc + num, 10));

// Challenge 7
const intersection = (...arrays) => {
  return arrays.reduce((acc, curr) => {
    return curr.filter((el) => acc.includes(el));
  });
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

// Challenge 8
const union = (...arrays) => {
  return arrays.reduce((acc, curr) => {
    const newElements = curr.filter((el) => !acc.includes(el));
    return acc.concat(newElements);
  });
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
const objOfMatches = (array1, array2, callback) => {
  const mapOfObject = {};
  array1.forEach((val, index) => {
    if (callback(val) === array2[index]) {
      mapOfObject[val] = array2[index];
    }
  });

  return mapOfObject;
};

const objOfMatches2 = (array1, array2) => {
  let map = new Map();

  array1.forEach((val, index) => {
    map.set(val, array2[index]);
  });

  return Object.fromEntries(map);
};

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    (str) => str.toUpperCase()
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {
  let mapOfObject = {};

  arrVals.forEach((val) => {
    mapOfObject[val] = arrCallbacks.map((callback) => callback(val));
  });

  return mapOfObject;
};

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      (str) => str.toUpperCase(),
      (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(),
      (str) => str + str,
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
const commutative = (func1, func2, value) => {
  // const firstResult = func2(func1(value));
  // const secondResult = func1(func2(value));

  // return firstResult === secondResult;
  return func1(func2(value)) === func2(func1(value));
};

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 12
const objFilter = (obj, callback) => {
  const newObject = {};
  for (const property in obj) {
    if (callback(property) === obj[property]) {
      newObject[property] = obj[property];
    }
  }
  return newObject;
};

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 13
const rating = (arrOfFuncs, value) => {};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 14
const pipe = (arrOfFuncs, value) => {
  arrOfFuncs.forEach((fun) => {
    value = fun(value);
  });
  return value;
};

const pipe2 = (...arrOfFuncs) => {
  return (input) => arrOfFuncs.reduce((acc, func) => func(acc), input);
};

// /*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'
const flows = pipe2(capitalize, addLowerCase, repeat);
console.log(flows("HELLO"));

// Challenge 15
/*
highestFunc should return the key of the object whose associated value (which will be a function) 
returns the largest number, when the subject is given as input.
*/

/* 
1. Iterate to all of the object item
2. Do the calculation on every function and save the key of the object to the local variables
3. If the result of the next calculation is greater than previous calculation, then replace it with the new key.
4. Return the key 
*/
const highestFunc = (objOfFuncs, subject) => {
  let highestNum = -Infinity;
  let highFunc;
  for (const key in objOfFuncs) {
    let fun = objOfFuncs[key];
    if (fun(subject) > highestNum) {
      highestNum = fun(subject);
      highFunc = key;
    }
  }
  return highFunc;
};

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

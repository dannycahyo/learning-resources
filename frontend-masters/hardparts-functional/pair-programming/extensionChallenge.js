// Challenge 1
const functionValidator = (funcArr, input, output) => {
  return funcArr.reduce((acc, func) => {
    if (func(input) === output) {
      acc.push(func);
    }
    return acc;
  }, []);
};

const addFive = (num) => num + 5;
const multiplyByTwo = (num) => num * 2;
const subtractOne = (num) => num - 1;
const fnArr = [addFive, multiplyByTwo, subtractOne];

console.log(functionValidator(fnArr, 5, 10)); // should log [num => num + 5, num => num * 2]

// Challenge 2
const allClear = (funcArr, value) => {
  const tempResults = funcArr.reduce((acc, func) => {
    func(value) ? acc.push(true) : acc.push(false);

    return acc;
  }, []);

  return tempResults.every(Boolean);
};

const allClear2 = (funcArr, value) => {
  return funcArr.reduce((acc, func) => {
    if (acc) return func(value);
    return acc;
  }, true);
};

const isOdd = (num) => num % 2 === 1;
const isPositive = (num) => num > 0;
const multipleOfFive = (num) => num % 5 === 0;
const numFnArr = [isOdd, isPositive, multipleOfFive];
console.log(allClear(numFnArr, 25)); // should log true
console.log(allClear(numFnArr, -25)); // should log false

// Challenge 3

/**
 *
 * @param {Write a function numSelectString that accepts an array of numbers and returns a string. This function should use filter, sort, and reduce to return a string containing only the odd numbers from the array, separated by commas, in ascending order.}
 * @returns
 */
const numSelectString = (numArr) => {
  return numArr
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      return `${acc}, ${curr}`;
    });
};

const nums = [17, 34, 3, 12];
console.log(numSelectString(nums)); // should log "3, 17"

// Challenge 4
/**
 *
 * @param {Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. The titles should be all uppercase strings.}
 */
const movieSelector = (moviesArr) => {
  return moviesArr
    .filter((movie) => movie.score > 5)
    .map((movie) => movie.title.toUpperCase());
};

const movieSelector2 = (moviesArr) => {
  return moviesArr
    .filter((movie) => movie.score > 5)
    .map((movie) => {
      movie.title = movie.title.toUpperCase();
      return movie;
    })
    .reduce((acc, curr) => {
      acc.push(curr.title);
      return acc;
    }, []);
};

const movies = [
  { id: 1, title: "Pan's Labyrinth", score: 9 },
  { id: 37, title: "Manos: The Hands of Fate", score: 2 },
  { title: "Air Bud", score: 5 },
  { title: "Hackers", score: 7 },
];
console.log(movieSelector(movies)); // should log [ "PAN'S LABYRINTH", "HACKERS" ]

// Challenge 5
/**
 *
 * @param {Create a function curriedAddThreeNums that adds three numbers together when run thrice in succession as follows}
 */
const curriedAddThreeNums = (num1) => (num2) => (num3) => num1 + num2 + num3;

const add3 = curriedAddThreeNums(3);
const minusOne = add3(-1);
const plusOne = minusOne(1);

console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3

// Challenge 6
const curriedAddTwoNumsToFive = curriedAddThreeNums(5);

console.log(curriedAddTwoNumsToFive(6)(7)); // should log 18

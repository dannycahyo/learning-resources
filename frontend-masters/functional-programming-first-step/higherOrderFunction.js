/**
 * Filter Section
 */

// Filter odds and even number1
const filterOddNumber = [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);
console.log(filterOddNumber);
const filterEvenNumber = [1, 2, 3, 4, 5, 6].filter((num) => num % 2 !== 0);
console.log(filterEvenNumber);

// Filtering Num That Greater Than Four
const filterGreaterThanFour = [2, 3, 4, 44, 5, 2, 21].filter((num) => num > 4);
console.log(filterGreaterThanFour);

/**
 * Map Section
 */
const doubleNumber = [2, 4, 6, 8, 9].map((num) => num * 2);
console.log(doubleNumber);

const halvedNumber = [2, 3, 7, 8, 3, 2].map((num) => num / 2);
console.log(halvedNumber);

// Fizz Buzz Section
const fizzBuzz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "FizzBuzz";

  return num;
});

console.log(fizzBuzz);

/**
 * Reduce section
 */

const sumNumber = [3, 5, 6, 4, 6, 7, 8].reduce(
  (acc, current) => acc + current,
  0
);
console.log(sumNumber);

const maxNumber = [3, 5, 6, 12, 6, 7, 8].reduce((acc, value) => {
  return value > acc ? value : acc;
}, 0);

console.log(maxNumber);

const multiplyby2 = (num) => {
  return num * 2;
};

const manipulateArray = [1, 2, 4, 5, 6].map(multiplyby2);
console.log(manipulateArray);

const iterativeMultiplyby2 = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
};
console.log(iterativeMultiplyby2([1, 2, 4, 5, 6]));

// First thing first, let's understand the motivation behind the Higher Order Function

const tenSquared = () => 10 * 10;
const nineSquared = () => 9 * 9;
/*
Imagine we want to squared other numbers?, the function above is not reusable or not DRY
We can fix that, by using parameters
*/

const squareNumber = (number) => number * number;
// The code above is more readable now, right?

/* Let's take a look into more real example */

const copyArrayAndMultiplyByTwo = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }

  return output;
};

const result = copyArrayAndMultiplyByTwo([1, 2, 3]);

// Now we have another condition
const copyArrayAndDividedByTwo = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }

  return output;
};

const result2 = copyArrayAndDividedByTwo([1, 2, 3]);

/*
Did you realize something ? What rule that we breaking ? Yeap, exactly, the DRY (Don't repeat yourself)
Now it's time to use Higher Order Function
*/

const copyArrayAndManipulateIt = (array, instruction) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }

  return output;
};

const plusByTwo = (input) => input + 2;
const result3 = copyArrayAndManipulateIt([1, 2, 3], plusByTwo);

/* Can You Spot On which one is the higher order function and which one that's the callback function ?
The copyArrayAndManipulateIt => HOF
The plusByTwo => Callback Function
*/

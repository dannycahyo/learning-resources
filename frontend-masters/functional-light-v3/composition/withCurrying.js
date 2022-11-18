const sum = (x, y) => x + y;
const triple = (x) => x * 3;
const divBy = (y, x) => x / y;

const result = divBy(2, triple(sum(3, 5)));

// SEE ? We can do composition because of the shape of our function

// We can curry the function so that we can make the unary function

sum = curry(2, sum);
divBy = curry(2, divBy);

composeThree(divBy(2), triple, sum(3))(5);

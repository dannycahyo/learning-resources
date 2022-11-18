// The slides section from the function compositition

const ender = (ending) => (input) => input + ending;

const sayWorld = ender("World");
const sayHello = ender("Hello");
const exclamation = ender("!");

const hypeUp = (x) => sayWorld(sayHello(exclamation(x)));

console.log(hypeUp("GG"));

// The exercise section
const pluralize = (singularWord) => singularWord + "s";
const love = (word) => "I love " + word;
const exclaim = (sentece) => sentece + "!";

const combineAllTogether = exclaim(love(pluralize("Lara")));
console.log(combineAllTogether);

// Instead of that kind of function call, we actually can make the pipeline function
const pipeline = (...functions) => {
  const head = functions[0];
  const tail = functions.filter((fun, index) => index !== 0);
  if (functions.length === 0) return (input) => input;
  if (functions.length === 1) return (input) => head(input);

  return (input) => pipeline([...tail, head(input)]);
};

// Fail, there's something wrong to the pipeline function
const showLove = pipeline([pluralize, love, exclaim]);
console.log(showLove);

const reducePipeline = (...functions) => {
  return (input) => functions.reduce((acc, func) => func(acc), input);
};

const showLove2 = reducePipeline([pluralize, love, exclaim]);
console.log(showLove2("Danny"));

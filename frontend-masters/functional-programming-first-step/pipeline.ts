const pluralizeWord = (singularWord: string): string => singularWord + "s";
const sayLove = (word: string): string => "I love " + word;
const addingExclamin = (sentece: string): string => sentece + "!";

const reducePipeLine = (
  ...functions: ((input: string) => string)[]
): ((input: string) => string) => {
  return (input) => functions.reduce((acc, func) => func(acc), input);
};

const compose2 = reducePipeLine(pluralizeWord, sayLove, addingExclamin);
console.log(compose2("Kudo"));

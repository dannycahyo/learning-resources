// With currying, we split our function into multi function with only one argument, each function just return one thing
const programmingQuote = (name, year, text) => `${text}, ${name}, ${year}`;
const stuckWise = programmingQuote(
  "Danny GG",
  2000,
  "It's totally okay whenever you need help if you're getting stuck"
);

// Imagine we have another quote from Danny, what we're gonnna do will be DRY.
const growthWise = programmingQuote(
  "Danny GG",
  2000,
  "Get out of your comfort zone"
);

// See ? There's so much repetition right?. So let's currying our function
const curriedQuote = (name) => (year) => (text) =>
  programmingQuote(name, year, text);
const quoteFromDanny = curriedQuote("Danny");

// Now, we can do something like this:
const beautifulQuote = quoteFromDanny("2017")("Get out of your comfort zone");
// See? We don't have to write Danny again and again

// Or maybe now we wanna avoid the same year again and again
const dannyQuotePlusTheYear = quoteFromDanny("2018");

// Now we just have to write the quote instead
const sophisticatedQuote = dannyQuotePlusTheYear("Hohoho yohohoho hooo");

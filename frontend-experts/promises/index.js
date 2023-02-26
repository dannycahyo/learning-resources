const promise = new Promise((resolve, reject) => {
  //   resolve("I FIRED");
  //   reject("I FIRED");
  // Let's say using setTimeout is a long running process
  // that takes 300ms to complete
  //   setTimeout(() => resolve("I FIRED"), 1000);
  // setTimeout(() => reject("UPSSS Something went wrong!"), 1000);
});

// console.log(promise);

// setTimeout(() => console.log(promise), 1500);
//  We never know when the promise will be resolved

//  We can use the .then() method to handle the promise

// promise.then(console.log);

// We can catch the error with the then

// promise.then(console.log, console.error);

//  We can also use the .catch() method to handle the promise

// promise.catch(console.error);

// We can also directly make resolve promise
const promiseResolve = Promise.resolve("I FIRED");

// console.log(promiseResolve.then(console.log));

// If we handle the rejcection, this never gonna happpend
// console.log(promiseResolve.catch(console.error));

// We can chain the then and do something for it
const chainingPromise = new Promise((resolve, reject) => {
  resolve(2);
});

chainingPromise
  .then((num) => num * 2) // Return new promise
  .then((num) => num * 2) // Return new promise
  .then((num) => {
    throw new Error("Something went wrong HERE HERE");
  }) // Return rejected promise
  .then(console.log) // This not gonna show
  .catch((error) => {
    // console.error(error);
    return 10;
  }) // We catch the error over here
  .then(console.log)
  .finally(() => console.log("I am finally done")); // It will always run regardless the promise is fullfilled or rejected

// const dataFromInternet = fetch("https://jsonplaceholder.typicode.com/users");

// dataFromInternet.then((response) => response.json()).then(console.log);

// Promise All

const promise1 = Promise.resolve("Promise 1");
const promise2 = Promise.reject("Promise 2");
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("COok"), 1000);
});

// Promise all will wait until all of promise resolve
Promise.all([promise1, promise2, promise3]).catch(console.log);

// Promise Race => Resolve the fastest resolve promise
Promise.race([
  new Promise((res, rej) => setTimeout(() => res("Third"), 3000)),
  new Promise((res, rej) => setTimeout(() => rej("Second"), 2000)), // Even if this one is reject
  new Promise((res, rej) => setTimeout(() => res("First"), 1000)),
]).then(console.log);

// Note, the order of promise is actually important if the timing of the promise is the same

Promise.race([
  new Promise((res, rej) => setTimeout(() => res("Third"), 3000)),
  new Promise((res, rej) => setTimeout(() => rej("Catch me"), 1000)),
  new Promise((res, rej) => setTimeout(() => res("First"), 1000)),
]).catch(console.log);

// Promise any, it will only care for the promise that is resolved
Promise.any([
  new Promise((res, rej) => setTimeout(() => rej("Third"), 3000)),
  new Promise((res, rej) => setTimeout(() => rej("Catch me"), 1000)),
  new Promise((res, rej) => setTimeout(() => rej("Catch me 2"), 1000)),
])
  .then(console.log)
  .catch(() => console.log("Everything is rejected"));

// Async Await promise

const asynFunction = async () => {
  try {
    const data = await new Promise((res, rej) =>
      setTimeout(() => rej("COK"), 1000)
    );
    console.log(data);
  } catch (error) {
    console.error("Oh no " + error);
  }
};

asynFunction();

const asynFunction2 = async () => {
  return new Promise((res, rej) => setTimeout(() => res("COK @"), 1000));
};

asynFunction2().then(console.log).catch(console.error);

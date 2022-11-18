/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => {
    console.log("welcome");
  }, 3000);
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log("Hello");
  setTimeout(() => {
    console.log("good bye");
  }, 3000);
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  setInterval(() => {
    console.log("hi again");
  }, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  const runInterval = setInterval(() => {
    console.log("hi for now");
  }, 1000);

  setTimeout(() => {
    clearInterval(runInterval);
  }, 5000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  const runInterval = setInterval(() => {
    func();
  }, interval * 1000);

  setTimeout(() => {
    clearInterval(runInterval);
  }, duration * 1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  return () => {
    for (let i = 0; i <= target; i++) {
      setTimeout(() => {
        console.log(`Wait, ${i} seconds`);
      }, wait);
    }
  };
}

function delayCounter2(target, wait) {
  let intervalId;
  let counter = 0;
  return function inner() {
    if (counter === 0) {
      counter++;
      intervalId = setInterval(() => {
        console.log(inner());
      }, wait);
    } else if (counter === target) {
      clearInterval(intervalId);
      return counter;
    } else {
      return counter++;
    }
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter2(3, 1000);
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(val));
    }, 2000);
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised("wait for it...");
createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
  }
  // ADD METHODS HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */
/**
 *
 * @param {Write a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.
 * @param {Additional calls to the returned function within the interval time should not be invoked or queued, but the timer should still get reset.} }
 */

function debounce(callback, interval) {
  let timer,
    readyToCall = true;

  /**
   *
   * @returns callback(), or "undefined" depending on if interval ms have ellapsed since last call to debouncedFunction
   */
  function debouncedFunction() {
    if (readyToCall) {
      readyToCall = false;

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return callback();
    } else {
      // when debouncedFunction is not ready to be called,the timer running from the previous call should be reset—making it "debouced three seconds from every call", instead of "debounded three seconds from every successful call"
      clearTimeout(timer);

      timer = setTimeout(() => {
        readyToCall = true;
      }, interval);

      return "unsucessful";
    }
  }

  return debouncedFunction;
}

function sayHi() {
  return "hi";
}

const debouncedSayHi = debounce(sayHi, 3000);

/* tests */

console.log(debouncedSayHi()); // -> 'hi'

setTimeout(() => {
  console.log(debouncedSayHi());
}, 2000); // -> undefined

setTimeout(() => {
  console.log(debouncedSayHi());
}, 4000); // -> undefined

setTimeout(() => {
  console.log(debouncedSayHi());
}, 8000); // -> 'hi'

// ?? using iterm to run file, there is a second pause in between when cb for last setTimeout? I would expect it to just cut out right there

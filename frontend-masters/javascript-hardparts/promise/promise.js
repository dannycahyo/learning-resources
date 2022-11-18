function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000);

console.log("Me First!");

// How about we change the duration become 0 miliseconds
function printHi() {
  console.log("Hi");
}

setTimeout(printHi, 0);

console.log("Second First!");
// It's still the same right? the printHi funtion is last executed.

/* More Examples */
function greetings() {
  console.log("How Are You?");
}
function blocFor1Sec() {
  console.log("Now you see me");
}

setTimeout(greetings, 0);
blocFor1Sec();
console.log("Third First!");

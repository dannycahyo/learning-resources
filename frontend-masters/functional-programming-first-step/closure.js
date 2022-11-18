// Basic Closure

// We're gonna break down multi argument of the function by using the closure
function writeMessage(message, salutation, name) {
  return `${message} ${salutation}, ${name}`;
}

console.log(
  writeMessage(
    "You're doing amazing! Hopefully these exercises help you get a bit _closure_ to your programming goals.",
    "Keep _currying_ on",
    "Functional Pungrammer"
  )
);

// Let's utilize the closures
const signMessageFrom = (name) => (message, salutation) =>
  writeMessage(message, salutation, name);
const writeFriendlyNoteFromDanny = signMessageFrom("Danny GG");
// Now whenever I wanna write message, I can confidently just using writeFriendlyNoteFromDanny function
console.log(
  writeFriendlyNoteFromDanny("Hello Wahidyan Kresna Fidayoka", "Your Mentee")
);

const signMessageWith = (salutation) => (message, name) =>
  writeMessage(message, salutation, name);
const writeBusinessMemo = signMessageWith("Best Regards");
console.log(
  writeBusinessMemo("You're doing great, I'm proud of you,", "Danny")
);

const makeSignature = (salutation, name) => (message) =>
  writeMessage(message, salutation, name);
const justWriteYourMessage = makeSignature("Sincerely", "Nindra Zaka");
console.log(justWriteYourMessage("Hi Babe, What's Upp,"));

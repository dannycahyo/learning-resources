// Let's see the imperative approach implementation

function isVowel(char) {
  return ["a", "i", "u", "e", "o"].includes(char);
}

function countVowel(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowel("The quick brown fox jumped over the lazy dog"));

// We can actually make it more declarative with Recursion

/*
Here's the pattern that you can see:
- Break the problem into smaller, and see if it can be solved with Recursion
- Divide and Conquer
*/

function recCountVowel(str) {
  //   if (str.length === 0) return 0;
  let first = isVowel(str[0]) ? 1 : 0;
  if (str.length <= 1) {
    return first;
  }

  return first + countVowel(str.slice(1));
}

console.log(recCountVowel("The quick brown fox jumped over the lazy dog"));

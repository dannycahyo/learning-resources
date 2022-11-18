// Factorial case
function iterativeFactorial(n) {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }

  return result;
}

console.log(iterativeFactorial(5));

function recursiveFactorial(n) {
  if (n === 1) {
    return n;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

// Fibonacci Number
// 0,1,1,2,3,5,8,13,21 So on so forths
function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}

console.log(iterativeFibonacci(6));

function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log(recursiveFibonacci(6));

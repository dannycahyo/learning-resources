let globalNum = 5;

// Lexical Scope to the global
function logNum() {
  const localNum = 1;
  console.log(globalNum + localNum); // globalNum points to the global scope
}

globalNum = 10;

logNum();

function outerFunc() {
  const num = 5; // this num variable is never gonna be garbage collected since it's used in the inner func

  return function () {
    console.log(num);
  };
}

const innerFunc = outerFunc();
innerFunc();

function makeFunctions() {
  let privateNum = 0;

  function privateIncerement() {
    privateNum++;
  }

  return {
    logNumFunc: () => console.log(privateNum),
    incrementFunc: () => {
      privateIncerement();
      console.log("Incremented");
    },
  };
}

const { logNumFunc, incrementFunc } = makeFunctions();
logNumFunc();
incrementFunc();
logNumFunc();

// Closures are a way to create private variables in JS

// const { logNumFunc: logNumFunc2, incrementFunc: incrementFunc2 } =
//   makeFunctions();
// logNumFunc2();
// incrementFunc2();
// incrementFunc2();
// logNumFunc2();

for (var i = 0; i < 3; i++) {
  // at the end we still get i++ rather than stopping at two
  console.log(i, "VAR");
  setTimeout(() => console.log(i), 500);
}

// console.log("VAR", i);

// Let's break down, this is what happend if we use let
// let i = 0;
// setTimeout(() => console.log(i), 500);

// let i2 = 1;
// setTimeout(() => console.log(i2), 500);

// let i3 = 2;
// setTimeout(() => console.log(i3), 500);

// // Meanwhile when we user var, it's function global or function scope
// let iVar = 2;
// setTimeout(() => console.log(iVar), 500);

// setTimeout(() => console.log(iVar), 500);

// setTimeout(() => console.log(iVar), 500);

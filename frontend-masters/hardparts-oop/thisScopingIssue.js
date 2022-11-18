function CreateUserFunction(name, score) {
  console.log(this);
  this.name = name;
  this.score = score;
}

// This won't work if I user arrow function
CreateUserFunction.prototype.increment = function () {
  // This won't work, because the this is refering to the global window
  function uselessAdd1() {
    this.score++;
  }
  uselessAdd1();
  // It works with arrow functions
  const add1 = () => {
    this.score++;
  };
  add1();
};

CreateUserFunction.prototype.login = function () {
  console.log("You are now logged in");
};

const user1 = new CreateUserFunction("Danny", 100);
console.log(user1);

user1.increment();

console.log(user1);

const user2 = new CreateUserFunction("Agung", 200);

user2.increment();

console.log(user2);

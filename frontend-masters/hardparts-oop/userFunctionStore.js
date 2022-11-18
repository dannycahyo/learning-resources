const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("User logged in");
  },
};

const createUserFunction = (name, score) => {
  const user = Object.create(userFunctionStore);
  user.name = name;
  user.score = score;

  return user;
};

const user1 = createUserFunction("Danny", 100);
console.log(user1);

user1.increment();

console.log(user1);

const user2 = createUserFunction("Agung", 200);
console.log(user2);

user2.login();

user2.increment();
console.log(user2);

const userFunctionStore = {
  sayName: function () {
    console.log(`Hello my name is ${this.name}`);
  },
  increment: function () {
    this.score++;
  },
};

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const user1 = userCreator("Danny", 100);
user1.sayName();
user1.increment();

user1;

const paidUserFunctionStore = {
  increaseBalance: function () {
    this.accountBalance++;
  },
};

Object.setPrototypeOf(paidUserFunctionStore, userFunctionStore);

function paidUserCreator(paidName, paidScore, paidAccountBalance) {
  const newPaidUser = userCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunctionStore);
  newPaidUser.accountBalance = paidAccountBalance;

  return newPaidUser;
}

const paidUser1 = paidUserCreator("Aka", 200, 50);
paidUser1;

paidUser1.sayName();
paidUser1.increment();

paidUser1;

paidUser1.increaseBalance();

paidUser1;

// user1.increaseBalance() We can do this because the normal user doesn't have access to paidUser functionality

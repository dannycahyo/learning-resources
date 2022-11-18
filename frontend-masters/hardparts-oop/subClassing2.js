function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.sayName = function () {
  console.log(`Hello my name is ${this.name}`);
};

userCreator.prototype.increment = function () {
  this.score++;
};

const user1 = new userCreator("Danny", 150);
user1;

user1.sayName();

function paidUserCreator(paidName, paidScore, paidAccountBalance) {
  userCreator.call(this, paidName, paidScore);
  this.accountBalance = paidAccountBalance;
}

paidUserCreator.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.increaseAccountBalance = function () {
  this.accountBalance++;
};

const paidUser = new paidUserCreator("Aka", 200, 100);

paidUser.increaseAccountBalance();

paidUser;

paidUser.sayName();

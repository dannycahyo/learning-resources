class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  sayName() {
    return `Hello my name is ${this.name}`;
  }
  increment() {
    this.score++;
  }
}

const user = new UserCreator("Danny", 99);
user;

user.increment();

user;

console.log(user.sayName());

class PaidUserCreator extends UserCreator {
  constructor(paidName, paidScore, paidAccountBalance) {
    super(paidName, paidScore);
    this.accountBalance = paidAccountBalance;
  }

  increaseAccountBalance() {
    this.accountBalance++;
  }
}

const paidUser = new PaidUserCreator("Aka", 199, 6);

paidUser;

paidUser.increaseAccountBalance();

paidUser;

paidUser.increment();

paidUser;

class UserCreator {
  constructor(name, score) {
    console.log(this);
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("You are now logged in");
  }
}

const user1 = new UserCreator("Danny", 200);

console.log(user1);

user1.increment();

console.log(user1);

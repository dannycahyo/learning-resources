const user1 = {};

user1.name = "Danny";
user1.score = 100;
user1.increment = () => {
  user1.score++;
};

user1.increment();

console.log(user1);

const user2 = Object.create(null);

user2.name = "Agung";
user2.score = 200;
user2.increment = () => {
  user2.score++;
};

user2.increment();

console.log(user2);

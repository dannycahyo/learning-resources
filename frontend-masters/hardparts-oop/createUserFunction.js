const createUserFunction = (name, score) => {
  const user = {};
  user.name = name;
  user.score = score;

  user.increment = () => {
    user.score++;
  };

  return user;
};

const user1 = createUserFunction("Danny", 100);
user1.increment();

console.log(user1);

const user2 = createUserFunction("Aka", 200);
user2.increment();

console.log(user2);

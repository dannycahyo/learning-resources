const user1 = {
  name: "Danny",
  score: 21,
  increment: () => {
    user1.age++;
  },
};

const user2 = {};

user2.name = "Aka";
(user2.score = 39),
  (user2.increment = () => {
    user2.score++;
  });

const user3 = Object.create(null);
user3.name = "Beni";
(user3.score = 28),
  (user3.increment = () => {
    user3.score++;
  });

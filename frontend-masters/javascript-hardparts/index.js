const person = { name: "Adele", age: 19 };
const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "sari";
};

changeAge(person);
changeAgeAndName();

console.log(person);

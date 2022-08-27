const test = "test is running";

console.log(test);

const people = [
  { name: "Louis", age: 36 },
  { name: "Elena", age: 31 },
  { name: "Josh", age: 25 },
  { name: "Samantha", age: 22 },
  { name: "Jessica", age: 35 },
];

const isOverThirty = people.filter((person) => person.age > 30);

const superhero = {
  superName: "Batman",
  powers: "money",
  secretIdentity: "Bruce Wayne",
};

const { superName, powers, secretIdentity } = superhero;
console.log(
  `His name is ${superName}, his power is ${powers}, his secret identity is ${secretIdentity}`
);

console.log("These people are over 30", isOverThirty);

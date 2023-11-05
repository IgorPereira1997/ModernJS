const user = {
  firstName: "Igor",
  lastName: "Pereira",
  age: 26,
  instagram: "@igortpereira",
  skills: ['DevOps', 'Backend', 'Frontend', 'Mobile'],
};

const data = user;
console.log(data.firstName, data.age);

//Destructuring objects
const { firstName, age, skills } = user;
console.log(firstName, age);

//Destructuring array
const [first, second, third, fourth] = skills;
console.log(third);

//Renaming descontruct variables
const { instagram: redeSocial} = user;
console.log(redeSocial);
const user = {
  firstName: "Igor",
  lastName: "Pereira",
  age: 26,
  instagram: "@igortpereira",
  skills: ['DevOps', 'Backend', 'Frontend', 'Mobile'],
  active: false
};

//Spread Operator

//Regular way to change parameter value
//user.active = true;
//Used to do Merge between objects
//Object.assign(user, { active: true });

//above options break immutability, 'cause they're messing with the object itself
//Solution: create new object with user's attributes

const updatedUser = {
  firstName: user.firstName,
  lastName: user.lastName,
  age: user.age,
  instagram: user.instagram,
  skills: user.skills,
  active: true
};

console.log({user});
console.log({updatedUser});

//Problem -> Not scalable, hardens itself when adding more parameters.
//Solution -> Spread operator + desired changed below
//DISCLAIMER: Spread operator can be used anywhere

const newUpdatedUser = {
  ...user,
  active: true
};

console.log({newUpdatedUser});

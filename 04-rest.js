const user = {
  firstName: "Igor",
  lastName: "Pereira",
  age: 26,
  instagram: "@igortpereira",
  skills: ['DevOps', 'Backend', 'Frontend', 'Mobile'],
};

//Rest Operator
//DISCLAIMER: variable with rest operator NEEDS to be the last item on desconstructor
const { firstName, skills, ...restUser } = user;
const [first, ...restSkills] = skills;

console.log(restUser);
console.log(restSkills);

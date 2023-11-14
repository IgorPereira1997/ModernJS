const tech = 'Node.js';
// Search for given pattern into string, being case sensitive
const includes = tech.includes('js');

console.log({includes});

const techArray = ['Node.js', 'Typescript', 'React'];
// Search for elements on the array, being case sensitive. It doesn't consider 
// parts of the string, but the exact object, so 'eact' gives false
// but 'React' gives true
const includesArray = techArray.includes('React');

console.log({includesArray});

//Sensitive case, the method returns if a given string 
//matches the beginning of the string object using the method 
const startsW = tech.startsWith('ode');
console.log({startsW});

//Functions with same properties as startsWith, but looking for the 
//end of the string.
const endsW = tech.endsWith('.js');
console.log({endsW});
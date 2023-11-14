//Template String allows for a better control of Strings, allowing
//Implicit break row and interpolation, useful for many cases
//Mainly for variable usage

console.log('Esta é a primeira linha\nEsta é a segunda linha');
console.log('\n');
console.log(`Esta é a primeira linha
Esta é a segunda linha`);

const name = 'Igor';

console.log('Seja bem vindo, '+name);
console.log(`Seja bem vindo, ${name}`);
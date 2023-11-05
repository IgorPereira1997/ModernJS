// 'this' used in normal function -> Local
// 'this' used in arrow function  -> Global for the present Scope

function myFucntion(){
  this.name = "Igor"
}

const myArrowFunction = () => {
  this.name = "Pereira"
}

console.log(new myFucntion());

console.log(this);

console.log(myArrowFunction());

console.log(this);

// Ways to handle dynamic number of arguments on function. 
//IMPORTANT: Arguments, just as this, is exclusive to the function itself

//One -> Using special variable 'arguments'

function soma() {
  console.log(Object.values(arguments));
}

soma(1,2,3,4,5,6, 'Igor');

//Two -> By using '...' before variable you want to be dynamic
function somaAlternate(...args){
  console.log(args);
}

somaAlternate(1,2,3,4,5,6, 'Igor');

//With Arrow Functions, the arguments is going to be fathers' arguments
const somaArrow = () => {
  console.log(arguments);
}
somaArrow();

//Ways to use Arrow functions:

//One -> Normal syntax

const normalSyntax = () => {
  //All you would do in a normal function
}

//Two -> Short syntax

const shortSyntax = () => 'Short way';

//Three -> Short syntax extended (using parenthesis to organize better code)
const shortSyntaxExtended = () => (
  1 === 1 
    ? 'Short way' 
    : 'No way'
  );

//Four -> Returning objects

const fourthWay_getUser = () => (
  {
    id: 1234,
    name: 'Igor'
  }
);
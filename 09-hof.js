const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
  { name: 'MacBook Pro', price: 20000, quantity:1 }
];

//.find -> Search given parameter in the array and return the object that has it
// It will return the first occurence
const find = array.find((product) => {
  console.log(`É um MacBook? ${
    product.name === 'MacBook Pro' 
      ? true 
      : false
  }`);
  return product.price > 1000;
});

console.log({find});

//.findIndex -> similar to .find, but returns the position of the object
// instead of the object itself. It will return the first occurence
const findIndex = array.findIndex((product) => {
  console.log(`É um MacBook? ${
    product.name === 'MacBook Pro' 
      ? true 
      : false
  }`);
  return product.price > 1000;
});

console.log({findIndex});
try{
  console.log('Produto: ', array[findIndex]);
}catch(error){
  console.log('Produto não encontrado');
}

//.some -> Verify if a given rule can be applied to an element of an object, 
//returning true if it does and false if it doesn't 

const some = array.some((product) => product.price <= 1000);
console.log({some});


//.some -> Verify if a given rule can be applied to all elements in a object, 
//returning true if it does and false if it doesn't 
const every = array.every((product) => product.price >= 1000);
console.log({every});

//.map -> Its usage it to make a copy of the object and it's parameters, 
//targeting to replacing some properties of it in a newly created object

const map = array.map((product) => {
  return {
    ...product, 
    subtotal: product.price * product.quantity
  };
});
console.log({map});

//.filter -> Validate items in array removing one or more that doesn't apply to
// given rule as its parameter

const filter = array.filter((product) => product.quantity > 1);
console.log({filter});

//.reduce -> Used to, as the method implies in its name, reducing an array or
// object to a given value given certain rule or condition
const reduce = array.reduce((accumulator, current) => {
  return accumulator + current.price * current.quantity;
}, 0);

console.log({reduce});
// function sayHello(name) {
//   console.log(`Olá, ${name}`);
// };

// //export default sayHello;

// //Developer will have to use the exact name of the function

// export { sayHello };

//or you can do this to export named function:

export function sayHello(name) {
  console.log(`Olá, ${name}`);
}

// It's equal to 
// module.exports = function sayHello(name) {
//   console.log(`Olá, ${name}`);
// };

const userName = "Pereira";
export default userName;
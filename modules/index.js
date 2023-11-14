//import sayHello from './sayHello.js'; -> Using default, it works flawlessly
import userName, { sayHello as novoNome } from './sayHello.js';
// Changes form below to above, using esmodules new guides
//const sayHello = require('./sayHello');

//sayHello('Igor');
//novoNome('Igor');
novoNome(userName);
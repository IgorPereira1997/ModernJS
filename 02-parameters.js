//Ways to determine standard value for parameters
//First-> Using rules, i.e. tertiary conditions
function firstWay(message){
  console.log(message ? message : 'Default message answer');
}

firstWay();
firstWay('Testing return');

//Second-> By attrib value to variable (JS will ignore it if message is not null)
function secondWay(message = 'Default message answer'){
  console.log(message);
}

secondWay();
secondWay('Testing return');
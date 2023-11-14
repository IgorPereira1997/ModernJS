const apiCall = new Promise((resolve, reject) => {
  //console.log('Dentro da promise');
  setTimeout(()=> {
    //resolve('Sucesso!');
    reject('Erro!');
  }, 2000);
});

//Using then/catch, code doesn't hangs because code is processed in
//background

//console.log(apiCall);
apiCall
.then((answer) => {
  console.log(answer);
})
.catch((error) => {
  console.log(error);
});

console.log('Depois do then/catch...');

//With async/await, code will wait the promise to be delivered to keep
//the execution

async function run(){
  try{
    const answer = await apiCall;
    console.log(answer);
    console.log('Depois do async/await...');
  }catch (error){
    console.log(error);
  }
};

run();

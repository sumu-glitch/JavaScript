console.log(
  "**************************************JS Promisses**************************************"
);

/*

const promissOne = new Promise(function(resolve,reject){
    //do an async task
    // DB calls , ctiptography, networks

    setTimeout(function(){
        console.log("Promiss Code Executed.");
        resolve();
    },1000)
})

promissOne.then(function(){
    console.log("Promiss Consume");
})



new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("async 2 promise");
        resolve();
    }, 2000);
}).then(function(){
    console.log("async2 consumed.");
    
})


const promissThree  =new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Promice three");
        resolve({user:"Gaurav", email:"gaurav@google.com"})
    },2000)
})
promissThree.then((user)=>{
    console.log(user);
})

*/

/*
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    
    const error = false;
    if (!error) {
      resolve({ name: "Gaurav", surname: "Parwate" });
    } else {
      reject("Error aa gya hai bhai.");
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((username) => {
    console.log(`Username is: ${username}`);
  })
  .catch((error) => {
    console.log(error);
  })
.finally(()=>
    console.log("Ye code to execute hoga hi bhai.")
)
*/

/*
fetch('https://dummyjson.com/users')
.then((apiResponce)=>{
    return apiResponce.json();
})
.then((dataFetch)=>{
    console.log(dataFetch);
})
.catch((error)=>console.log(error)
)
*/

async function apiFetchData() {
  try {
    const responce = await fetch("https://api.github.com/users/gaurav-coder");
    const data = await responce.json();
    console.log(data);
  } catch (error) {
    console.log(`E: ${error}`);
  }
}
apiFetchData();

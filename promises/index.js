//Promises:-
function dinnerScenario(){
    console.log("Entering into the hotel");
    console.log("calling the server and order paav bajji");
    console.log("server information the chef to prepare food");
    setTimeout(()=>{
        console.log("preparing pavv bhaji");
    },3000);

console.log("server deliver the food to the table");
setTimeout(()=>{
    console.log("eating paav bhaji");
},2000);

console.log("paying the bill");
console.log("leaving the hotel");
}
dinnerScenario();



// //use callbacks:-
function preparationOfFood(callback){
    setTimeout(()=>{
        console.log("preparing pavv bhaji");
        console.log("server deliver the food to the table");
        // eatingFood();
        callback();
    },3000);
};

function eatingFood(){
    setTimeout(()=>{
        console.log("eating paav bhaji");
        console.log("paying the bill");
        console.log("leaving the hotel");
    },2000);
};

function dinnerScenario(){
    console.log("Entering into the hotel");
    console.log("calling the server and order paav bajji");
    console.log("server information the chef to prepare food");
preparationOfFood(eatingFood);
};
dinnerScenario();






Promise.resolve(1)
  .then(() => console.log("promise1 resol"))
  .catch((err) => console.log("catching 1 promise"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
Promise.resolve(1).then(() => console.log("promise1"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
Promise.resolve(1).then(() => console.log("promise1"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));





//using promises:-
// function preparationOfFood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("preparing pavv bhaji");
//             console.log("server deliver the food to the table");
//             callback();
//         },3000);
//     });
// };

// function eatingFood(){
//     return new Promise((resolve, rejecct)=>{
//         setTimeout(()=>{
//             console.log("eating paav bhaji");
//             resolve();
//         },2000);
//     })
// };

// function payment(){
//     return new Promise((resolve,reject)=>{
//         console.log('paying the bill');
//         console.log('leaving the hotel')
//     });
// };
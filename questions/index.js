// function checkScope(num){   //num -> functional scope 1-3  //checkScope function ->functional scope 1-3
//     return console.log(num)
// }
// checkScope(2);


// var/let/const -> 
// var -> global scope/ functional scope.
// start from the point top of the document/function.

    //  console.log(a);
//     let a=5;




// let/const --> block scope.
// start from the point where it is declared.

// {
//     console.log(a);
//     let a=5;{

//     }
// }



// function A () {
//     var a,b,c;

//     function B () {
//         console.log(a)
//     }

//     function C () {
//         console.log(b);
//     }
// }

// below code is closure

// problem 1 --> closures
// (function immediateA(a){
//     return (function immediateB(b){
//         // console.log(1);
//         console.log(0);

//     })(1);    // value of b;
// })(0);       // value of a;




// IMP QUESTION ---> we want to print 1 to 5 in a interval of 1 second

// setInterval(
//     function (){
//         for( let i=1; i<=5; i++){
//             console.log(i)
//         }
//     },1000)









// var a=8;

// var a=9;
//             //   var will create the same reference value // var is not changing the reference
// var a=5;

// var a=2;


// let a=10;
//             //   let will create the different reference value // let is changing the reference
             
// let b = 11;


// WORKING
// for( let i=1; i<=5; i++){
//     setTimeout(function logging(){
//         console.log(i);
//     },i*1000)
// }







// implement multiply function so that it will work for triple also

// function multiply(num1, num2) {
//     return function triple(num3){
//         console.log(num3*num1);
//     }
// }

// const triple = multiple(3);

// triple(5); //15


// function multiply(num1, num2) {

//     if(num2 == undefined){
//         return function triple(num3){
//             console.log(num3*num1);
//         }
//     }else {
//         console.log(num1*num2);
//     }
    
// }

// multiply(10,20) //200;

// const triple = multiple(3);

// triple(5);


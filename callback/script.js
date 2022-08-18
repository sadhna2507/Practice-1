// console.log('hello')

// console.log("javascript")

// console.log("2022")

// callbacks acre used to make our program wait
//  since js is a synchronuos language but with the help of we can do asynchronous thing in javascript

// console.log('hello')

// setTimeout (function (){
//     console.log("javascript")
// }, 5000)

// console.log("2022")

// example 1
const cart = ["shoes", "clothes", "grocery"];

api.createOrder(cart, function () {

  api.proceedToPayment(function () {

    api.showOrderSummary(function () {
         
      api.updateWallet();

    });

  });

});

// there is a problem with this code...
// when we have large code and lots of api here and there...and api are dependent on on another
// so we end up haveing callback hell 
// and callback means one callback in another again one callback in anotherand so on...


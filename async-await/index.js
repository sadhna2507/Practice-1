function preparationOfFood() {
    return new Promise((resolve, reject) => {
      let vegetablesPresent = true;
      if (vegetablesPresent) {
        setTimeout(() => {
          console.log("preparing paav bajji");
          console.log("server deliver the food to the table");
          resolve("food prepared successfully and delivered");
        }, 3000);
      } else {
        reject("No vegetables");
      }
    });
  }
  
  function eatingFood() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("eating paav bajji");
        resolve("successfully ate food");
      }, 2000);
    });
  }
  
  function payment() {
    return new Promise((resolve, reject) => {
      let pursePresent = true;
      if (pursePresent) {
        console.log("paying the bill");
        console.log("leaving the hotel");
        resolve("process over");
      } else {
        reject("run from the hotel or washing the plates");
      }
    });
  }
  async function dinnerScenario() {
    console.log("Entering into the hotel");
    console.log("calling the server and order paav bajji");
    console.log("server informing the chef to prepare food");
    try {
      let foodMsg = await preparationOfFood();
      console.log(foodMsg);
      let ateMsg = await eatingFood();
      console.log(ateMsg);
      let paymentMsg = await payment();
      console.log(paymentMsg);
    } catch (err) {
      console.log("error ", err);
    }
  }
  
  dinnerScenario();
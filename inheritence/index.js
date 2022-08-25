// inheritance
class GrandParent {
    house() {
      console.log("house");
    }
  }
  
  class Parent extends GrandParent {
    car() {
      console.log("maruti espresso");
    }
  }
  
  class Child extends Parent {
    bike() {
      console.log("yamaha");
    }
  
    // polymorphism -> method overriding
    car() {
      console.log("audi");
    }
  }
  
  let vinayagam = new GrandParent();
  vinayagam.house();
  let vasanth = new Parent();
  let aadhitya = new Child();
  vasanth.car();
  aadhitya.car();
  // // aadhitya.bike();
  vasanth.house();
  aadhitya.house();
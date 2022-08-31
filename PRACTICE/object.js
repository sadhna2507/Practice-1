//copying of array 

// let nums = [1, 2, 3]
//  let copy = nums

//  copy[0] = 5;

//  console.log(nums, copy)

 //copying use spread operator

//  let person = {
//     name : "sadhna",
//     age : 23,
//  };

//  let copy = person

//  copy["name"] = "raashi";

//  console.log(person, copy);

//use spread operator
// let person = {
//     name : "sadhna",
//     age : 23,
//  };

//  let copy = {...person}

//  copy["name"] = "raashi";

//  console.log(person, copy);



// nested objects
// let person = {
//     name : "vasanth",
//     wife : "samantha",
//     son : {
//         name : "sheenu",
//         age : 10 ,
//     },
//  };

//  let copy = {...person}

//  person["son"]["name"] = "vicky";

//  console.log(person, copy);

 // son's name will get changed in bot the objects --> because spread operator will do shallow copy(single layer copy)


 //to avoid this use JSON.STRINGIFY
//  let person = {
//     name : "vasanth",
//     wife : "samantha",
//     son : {
//         name : "sheenu",
//         age : 10 ,
//     },
//  };

//  let copy = JSON.stringify(person) //--->conerting object into string
// //  console.log(JSON.stringify(person)) //----->conerting object into string

//  //string cannot access properties so again conerting string to object
//  let copiedPerson = JSON.parse(copy) //-----> converting srting to object

// //  console.log(copiedPerson)

//  person["son"]["name"] = "vicky";

//  console.log(person, copiedPerson); //WORKING

//ARRAYS IN FUNCTIONS

//-----> primitive datatype
// let num = 10;

// function change(value){
//     console.log("before changing", num , value) //10, 10

//     value = 20;
//     console.log("after changing", num , value) // 10, 20

// }change(num)


//----> reference data type
// let num = [1, 2, 3];

// function change(arr){
//     console.log("before changing", num , arr) //10, 10

//     arr[0] = 10;
//     console.log("after changing", num , arr) // 10, 20

// }change(num) -----> this is called call by reference(reference passed thst is why both are changed)

// to avoid this use JSON wala thing
// let num = [1, 2, 3];

// function change(arr){
//     let copy = JSON.parse(JSON.stringify(arr))
//     console.log("before changing", num , arr) //10, 10

//     arr[0] = 10;
//     console.log("after changing", num , copy) // 10, 20

// }change(num) --->working


//OBJECT IN FUNCTION
// let person = {
//     name : "krish",
//     age : 10,
// }

// function change(obj){
//     console.log("before", person, obj);

//     obj["age"] = 20;
//     console.log("after", person, obj);

// }change(person)  ----> both will 


//-------------------ADDING/DELETING IN OBJECT--------------------

//Adding in object
// let car ={
//     name : "maruti",
//     model : 2022,
// };

// object[key] = "value"
// car ["color"] = "red"   //prefer this one becoz it will work with space in between the words
// car["color scheme"] = "red" ----------->it will work

// car.color = "red"
// car.color scheme = "red" // ------------->throw error
//  console.log(car)


//Deleting in object
// let car ={
//     name : "maruti",
//     model : 2022,
// };

// // delete car.name //------------>name property will be deleted

// delete car  //-------------->nothing will be deleted

// console.log(car)
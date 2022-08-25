// //JSON.stringify()
// let personDetails = {
//   name: "xxxx",
//   date: "yyyy",
//   address: {
//     streetName: "aaaa",
//     city: "bbbb",
//   },
// };
// let copy = JSON.stringify(personDetails)
// //JSON.parse()
// let copied=JSON.parse(copy)
// console.log(copied);
//>>>>>>>>>>>object.keys<<<<<<<<<<<<<<
// let personDetails = {
//     name: "xxxx",
//     date: "yyyy",
//     address: {
//       streetName: "aaaa",
//       city: "bbbb",
//     },
//   };
// console.log(Object.keys(personDetails));
//>>>>>>>>>>>object.values<<<<<<<<<<<<<<
// let personDetails = {
//     name: "xxxx",
//     date: "yyyy",
//     address: {
//       streetName: "aaaa",
//       city: "bbbb",
//     },
//   };
// console.log(Object.values(personDetails));
//>>>>>>>>>>>object.entries<<<<<<<<<<<<<<
let personDetails = {
    name: "xxxx",
    date: "yyyy",
    address: {
      streetName: "aaaa",
      city: "bbbb",
    },
  };
console.log(Object.entries(personDetails))
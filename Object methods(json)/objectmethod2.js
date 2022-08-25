//Sorting By Keys
// let car ={
//     name:"BMW",
//     model:"Q4",
//     date: "2022"
// }
// let sortedKeeys= Object.keys(car).sort()
// let sortedObjeect={}
// for(var c of sortedKeeys){
//   sortedObjeect[c]=car[c]
// }
// console.log(sortedObjeect)



//Sorting by entries
// let car ={
//     name:"BMW",
//     model:"Q4",
//     date: 2022
   
// }

// let sortedKeys=Object.entries(car).sort()
// let sortedObjeect={}
// for(let c of sortedKeys){
//     sortedObjeect[c[0]]=c[1]
// }
// console.log(sortedKeys);


//Sorting by values
let carMailege ={
    BMW:32,
    voda:50,
    cola:20
   }

 let sortedValues=Object.entries(carMailege).sort((a,b)=>a[1]-b[1])
let sortedObjeect={}
for( let i=0;i<sortedValues.length;i++){
    sortedObjeect[sortedValues[i][0]]=sortedValues[i][1]
}
console.log(sortedObjeect);
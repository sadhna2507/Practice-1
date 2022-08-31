// let obj = {
//     name : "david",
//     age : 20,
//     country : "india",
// }

//find the length of the keys

// console.log(Object.keys(obj).length)

// let count = 0;
// for(let key in obj){
//     count+=1;
// }
// console.log(count)




//sort the keys like below
// {age:20 , country: "india", name:"david" }

// console.log(Object.keys(obj).sort()) --->will sort the keys
//  let sortedKeys = Object.keys(obj).sort()
//  let sortedObj = {}

//  for(let key of sortedKeys){
//     sortedObj[key] = obj[key]
//  }
//  console.log(sortedObj)



//entries
// let sortedItems = Object.entries(obj).sort()
// // console.log(sortedItems);

// let sortedObj ={}
// for(let item of sortedItems){
//     // console.log(item)

//     sortedObj[item[0]] = obj[item[0]]
// }
// console.log(sortedObj)


let scores ={
    anu : 10,
    isha :  90,
    rupi : 80,
    kunal : 35,
}

// sort by values
// {anu: 10, kunal: 35, rupi: 80, isha: 90}

// let sortedValue = Object.entries(scores).sort((a, b) => a[0] - b[0]) ----------> this will not sort because 0 is string value
// let sortedValue = Object.entries(scores).sort((a, b) => a[1] - b[1])  ----------> this will sort because 1 is no. value
// console.log(sortedValue)



//this will also work doing with the help of loop

// let values = Object.entries(scores).sort((a, b) => a[1] - b[1]) 
// let sortedObj = {}
// for(let i=0; i<values.length; i++){
//     // console.log(values[i])
//     // console.log(values[i][0], values[i][1])
//     sortedObj[values[i][0]] = values[i][1]
// }
// console.log(sortedObj)

// let values = Object.entries(scores).sort((a, b) => a[1] - b[1]) 
// let sortedObj = {}
// for(let i=0; i<values.length; i++){
//     let key = values[i][0]
//     let value = values[i][1]

//     sortedObj[key] = value
// }
// console.log(sortedObj)

// ***----------IMPORTANT NOTE----------***
//for numbers sorting use a-b method
//for string sorting use .sort() method
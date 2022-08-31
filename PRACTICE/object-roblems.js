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

let sortedValue = Object.values(scores).sort()
console.log(sortedValue)

sortedObj = {}
for(let value in sortedValue){
    // console.log(value)
}
console.log(value)

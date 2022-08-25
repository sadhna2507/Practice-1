//map polyfill
// Array.prototype.ownMap = function (calbacFn) {
// let inputArr= this;
// let outputArr=[];
// for(let i=0;i<inputArr.length;i++){
//     outputArr.push(calbacFn(this[i]));
// }
// return outputArr;
// };

// let arr = [1,2,3,4]
// let arr1= arr.ownMap(x=>x*2)
// console.log(arr1)

//filter polyfill
Array.prototype.ownFilter = function (calbacFn) {
    let inputArr = this;
    let outputArr = [];
    for (let i = 0; i < inputArr.length; i++) {
      if (calbacFn(this[i])) {
        outputArr.push(this[i]);
      }
    }
    return outputArr;
  };
  
  let arr = [1, 2, 3, 4];
  let arr1 = arr.ownFilter((x) => x > 2);
  console.log(arr1);
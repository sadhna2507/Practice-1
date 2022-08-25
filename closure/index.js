//--------closures:-my returned function along with lexical variables or lexical environment is forms closures.
//scope:-
function fname(){
    var name = 'anjali'
    console.log(name);
 }
 fname();
//  console.log(name);//throw an error becoz var is function scope



//------------------------------------//
function count(){
    var countNum = 1;
    countNum++;
    console.log(countNum);
}
count();//2
count();//2
count();//2



//------------------------------------//
var count = 1;
function counter(){
    count++;
    console.log(count);
}
counter();//2
counter();//3
counter();//4



//--------------------------------------//
function car(){
    var car = 'bmw';
    function car2(){
        console.log(car);
    }
    car2();
    // console.log(car);
}
car();



//--------------------------------------//
function add(){
    let num = 1;
// let age = 10;
     function add2(){
         num++;
        return num;
    }
    return add2;
}
let res = add();
console.log(res());//2
console.log(res());//3



//--------------------------------------//
//it should print at 3rd time
function sub(){
    let nums = 1;
    return function (){
        if(nums%3==0){
            console.log('printing',nums);
         }
         console.log(nums)
         nums+=1;
    }
}
let nums = sub();
nums();
nums();
nums();
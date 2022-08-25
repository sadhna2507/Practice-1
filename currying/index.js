//currying
// function main(a,b,c,d){
//     return a+b+c+d;
// }

// function main(a){
//     return (b) =>{
//         return(c) =>{
//             return(d) =>{
//                 return a+b+c+d
//             }
//         }
//     }
// }


// function main(){ //main(1) //main(6) // main(15) //main(29)
//     return(b) =>{ //b=5 //b=9 //b=14 //b=""
//         if(b) return main(a+b) // main(1+5)=main(6) //return main(6+9)=main(15) main(15+14) = main(29)

//         return a
//     }
// }
// console.log(main(1)(5)(9)(14))


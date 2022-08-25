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


function main(){
    return(b) =>{
        if(b) return main(a+b)

        returna
    }
}
console.log(main(1)(5)(9)(14))
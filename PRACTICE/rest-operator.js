// rest operaotor
// function shoppingCart(prices){
//     let total =0;
//     for(let i=0; i<prices.length; i++){
//         total += prices[i]
//     }
//     console.log(total)
// }
// shoppingCart([100, 200])
// shoppingCart(100, 200)----->will give 0...... because prices.length will not valid in this case so loop will not work

// now whatever arguments i give it should accept and execute...so for this we use REST OPERATOR

// REST OPERATOR will accept the alue and convert it into Array
// REST OPERATOR shouls always be used at the las.

// function shoppingCart(...prices){       //------------this rest opertaor is convertin 100, 200 in array 
//     console.log(prices)
//     let total =0;
//     for(let i=0; i<prices.length; i++){
//         total += prices[i]
//     }
//     console.log(total)
// }
// shoppingCart(100, 200)


// function shoppingCart(discount, ...prices, coupon){   ----------->  this will not work beacuse rest operator is not at last 
function shoppingCart(discount,  coupon, ...prices){   //---------->this will work
        console.log(discount, prices, coupon)
        let total =0;
        for(let i=0; i<prices.length; i++){
            total += prices[i]
        }
        console.log(total)
    }
    shoppingCart(5, 60, 100, 200)
    

//Factory method
// function createCirce(radius){
//     const circle= {
//         radius:radius,
//         draw:function(){
//             return "drawing circle"
//         }
//     }
//     return circle
// }
// let circle1 = createCirce(3)
// console.log("calling object by targeting the key which contains function as pair")
// console.log(circle1.draw())



//Constructor method

function Circle(radius){
    this.radius= radius;
    this.draw= function(){
        return "drawing circle";
    }
    return this;
}

let circle= new Circle(1);
console.log(circle,circle.draw())
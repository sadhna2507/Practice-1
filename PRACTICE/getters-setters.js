//GETTERS AND SETTERS IN JAVASCRIPT

// const person = {
//     firstName : "sadhna",
//     lastName : "Khairia",
//     fullName(){
//         // return `${firstName} ${lastName}` //---------->will not work
//         return `${person.firstName} ${person.lastName}` //------------> will work

//     }
// }
// person.fullName = "sachnin tendulkar"
// console.log(person)
// console.log(person.fullName())  //----->not wrking




// const person = {
//     firstName : "sadhna",
//     lastName : "Khairia",
//     get fullName(){
//             return `${person.firstName} ${person.lastName}`
//     },
    
//     set fullName (newName){
//         // console.log("new name :", newName) //still not changing becoz i am not changing anything
//         // let parts = newName.split(" ");
//         // console.log(parts) // using split will convert the sachin tendulkar in an array
//         // this.firstName = parts[0];  
//         // this.lastName = parts[1];

//         // person.firstName = parts[0];  //in place of this we can use person
//         // person.lastName = parts[1];
//     },
// }
// person.fullName = "sachnin tendulkar"
// console.log(person.fullName)











// GETTERS AND SETTERS

const person = {
    firstName : "sadhna",
    lastName : "Khairia",
    get fullName(){
            return `${person.firstName} ${person.lastName}`
    },
    
    set fullName (newName){
        let parts = newName.split(" ");
        this.firstName = parts[0];  
        this.lastName = parts[1];
    },
}
person.fullName = "sachnin tendulkar"
console.log(person.fullName)








//this below console will throw error because that console will search outside but the code is in block

// {
//     const message = "Good Morning"
// }

// console.log(message)
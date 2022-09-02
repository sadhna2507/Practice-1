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

        // person.firstName = parts[0];  //in place of this we can use person
        // person.lastName = parts[1];
    },
}
person.fullName = "sachnin tendulkar"
console.log(person.fullName)
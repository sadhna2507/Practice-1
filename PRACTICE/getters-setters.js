//GETTERS AND SETTERS IN JAVASCRIPT

const person = {
    firstName : "sadhna",
    lastName : "Khairia",
    fullName(){
        // return `${firstName} ${lastName}` //---------->will not work
        return `${person.firstName} ${person.lastName}` //------------> will work

    }
}
person.fullName = "sachnin tendulkar"
console.log(person)
// console.log(person.fullName())  //----->not wrking
//bind
let person3 = {
    name: 'sadhna',
    branch: 'EC',
};

let person4 = {
    name: 'priya',
    branch: 'EE',
};

let getData = function(place, char = 'joyful'){
    console.log(`${this.name} branch is ${this.branch}.I'm from ${place}. I'm ${char}`);
}

let personData = getData.bind(person4, 'shimla');
personData()
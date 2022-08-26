//selectors
let cityInput = document.querySelector(".cityName")
let btn1 = document.querySelector(".submitButton")

//event listeners

// btn1.addEventListener("click", function(name){
//     fetch(`API`)
//     .then(response => response.json()) //text ---> json
//     .then(data =>{
//         console.log(data);
//     }).catch(err => alert("Invalid city name!!"))
// })


//API FETCHING
btn1.addEventListener("click", function(name){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=5142a079c21f6cb2df156c3a42bfec63`)
    .then(response => response.json()) //text ---> json
    .then(data =>{
        let result = `<div><h1>city : ${data.name}</h1>
        <h1>temperature : ${Math.floor(data["main"].temp-273)} °C</h1>
        <h1>longitude : ${data["coord"].lon}</h1>
        <h1>longitude : ${data["coord"].lat}</h1></div>`
        let container = document.querySelector(".container")
        container.innerHTML += result
        console.log(data);
    }).catch(err => alert("Invalid city name!!"))
})

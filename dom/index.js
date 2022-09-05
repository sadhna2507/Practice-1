let btn = document.getElementById("submitBtn")
btn.addEventListener("click", (event)=>{
    
     add(event)
})
function add(event){
    event.preventDefault()
    // console.log("here")
    let link = document.getElementById('link').value
    let name = document.getElementById('name').value
    let categorty = document.getElementById('select').value
    // console.log(link)
    var object = {
        imgLink : link,
        head1 : name,
        head2 : categorty,
    }
const container = document.getElementById("container")

let div = document.createElement("div")
let h1 = document.createElement("h1")
let h2 = document.createElement("h2")
let img = document.createElement("img")
let p = document.createElement("p")


h1.textContent = object.head1
h2.textContent = object.head2
p.textContent = object.para
img.setAttribute('src',object.imgLink)

div.append(h1,img,h2,p)
container.append(div)
}





// let object = {
//     imgLink : "https://i.pinimg.com/550x/13/19/e7/1319e7922faffbfa43034a816126b97d.jpg" ,
//     head1 : "THOR",
//     head2 : "NEW",
//     para : "Hello",
// }

// const container = document.getElementById("container")

// let div = document.createElement("div")
// let h1 = document.createElement("h1")
// let h2 = document.createElement("h2")
// let img = document.createElement("img")
// let p = document.createElement("p")


// h1.textContent = object.head1
// h2.textContent = object.head2
// p.textContent = object.para
// img.setAttribute('src',object.imgLink)

// div.append(h1,img,h2,p)
// container.append(div)




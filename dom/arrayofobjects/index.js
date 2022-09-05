let btn = document.getElementById("submitBtn")
btn.addEventListener("click", (event)=>{
    
     add(event)
})
let filterbtn = document.getElementById("filter")
    filterbtn.addEventListener("change", filterData)

const data =[]

const container = document.getElementById("container")
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
    data.push(object)
    showData(data)

}
function filterData(){
    let val = filterbtn.value
    let filterData = data.filter((d)=>{
        returnd.h2 === val
    })
    // console.log(filterData)
    showData(filterData)
}

function showData(array){
    // console.log(array)
    container.innerHTML = null
    array.map((d)=>{
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let h1 = document.createElement("h1")
        let img = document.createElement("img")
        let p = document.createElement("p")


        h1.textContent = d.head1
        h2.textContent = d.head2
        p.textContent = d.para
        img.setAttribute('src', d.imgLink)

        div.append(h1,img,h2,p)
        container.append(div)
    })
}




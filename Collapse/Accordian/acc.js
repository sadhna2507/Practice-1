let contentBox = document.getElementsByClassName("contentbox");
// console.log(accordian);

for(let i=0; i<accordian.length; i++){
    contentBox[i].addEventListener("click", function () {
        // this.classList.add("active");
        this.classList.toggle("active");

        
    })
}
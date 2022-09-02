// this ---> object that is executing the current function

// method ---> represents obj
// function ---> represents global  ===> new keyword create ======> new empty obj



// method

// const video = {
//     title : "cricket",
//     play(){
//         console.log(this)  //print the same whole object in which it is present... means whole video object
//     },
//     stop : function(){
//         console.log(this)  //print the same whole object in which it is present... means whole video object
//     }
// }
// video.play();
// video.stop();




//function

// function play(){
//     console.log(this)
// }

// let stop = function(){
//     console.log(this)
// }
// // play();  // this will print the global object
// // stop();

// new play();
// new stop();


const match ={
    title : "cricket",
    players : ["sachin", "dhoni", "kohli"],
    displayPlayers(){
        // console.log(this)
        // console.log(this.players)
        // let count = 0;
        // this.players.forEach(function (player){
        //     console.log(this, ++count)
        // })

        let person ={
            name(){
                age : 10, console.log(this)
            }
        }
    }
}
match.displayPlayers()

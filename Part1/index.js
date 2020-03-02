var score = [];

// let player = document.getElementById("player");

function play(num, id){
    let clickedBox = document.getElementById(num);
    let newPlayer = document.getElementById("player");
    let boxId = document.getElementById(id);
    if (newPlayer.innerText === "X") {
        newPlayer.innerText = "O";
        boxId.innerText = "X";
        score[id] = "X";
    } else {
        newPlayer.innerText = "X";
        boxId.innerText = "O";
        score[id] = "O";
    }

 //checks if x is a winner   
if (score[0] != undefined && score[0] === "X" && score[1] === "X" && score[2] === "X"){
    window.alert("X is the winner");
} if (score[1] != undefined && score[3] === "X" && score[4] === "X" && score[5] === "X"){
    window.alert("X is the winner");
} if (score[2] != undefined && score[6] === "X" && score[7] === "X" && score[8] === "X"){
    window.alert("X is the winner");
} if (score[3] != undefined && score[0] === "X" && score[3] === "X" && score[6] === "X"){
    window.alert("X is the winner");
} if (score[4] != undefined && score[1] === "X" && score[4] === "X" && score[7] === "X"){
    window.alert("X is the winner");
} if (score[5] != undefined && score[2] === "X" && score[5] === "X" && score[8] === "X"){
    window.alert("X is the winner");
} if (score[6] != undefined && score[0] === "X" && score[4] === "X" && score[8] === "X"){
    window.alert("X is the winner");
} if (score[7] != undefined && score[6] === "X" && score[4] === "X" && score[2] === "X"){
    window.alert("X is the winner");
} 
// checks if O is a winner
if (score[0] != undefined && score[0] === "O" && score[1] === "O" && score[2] === "O"){
    window.alert("O is the winner");
} if (score[1] != undefined && score[3] === "O" && score[4] === "O" && score[5] === "O"){
    window.alert("O is the winner");
} if (score[2] != undefined && score[6] === "O" && score[7] === "O" && score[8] === "O"){
    window.alert("O is the winner");
} if (score[3] != undefined && score[0] === "O" && score[3] === "O" && score[6] === "O"){
    window.alert("O is the winner");
} if (score[4] != undefined && score[1] === "O" && score[4] === "O" && score[7] === "O"){
    window.alert("O is the winner");
} if (score[5] != undefined && score[2] === "O" && score[5] === "O" && score[8] === "O"){
    window.alert("O is the winner");
} if (score[6] != undefined && score[0] === "O" && score[4] === "O" && score[8] === "O"){
    window.alert("O is the winner");
} if (score[7] != undefined && score[6] === "O" && score[4] === "O" && score[2] === "O"){
    window.alert("O is the winner");
} 

var fullBoard = true;
for (i = 0; i <= 8; i++){
    if (score[i] === undefined) {
        fullBoard = false;
    }
}
if(fullBoard === true) {
    window.alert("CAT's game");
}
console.log(score);
}


// function reset(id){
//     let score = [];
//     for(i = 0; i < 10; i++){
//     let boxId = undefined;
//     }
// }
//Making button press change names

let player1 = "Player 1"

function changeName(){

    player1 = prompt ("What is Player 1's Name?")

    document.querySelector("p.Player1").innerHTML = player1;
}

let player2 ="Player 2"

function changeName2(){
    
    player2 = prompt ("What is Player 2's Name?")

    document.querySelector("p.Player2").innerHTML = player2;

}

//Making the dice roll

function rollDice() {
     
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomnumber2 = Math.floor(Math.random() * 6) + 1;
        let randomNumber3 = Math.floor(Math.random() * 6) + 1;
        let randomnumber4 = Math.floor(Math.random() * 6) + 1;

    

    document.querySelector(".img1").setAttribute ("src", "dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute ("src", "dice" + randomnumber2 + ".png");
    document.querySelector(".img3").setAttribute ("src", "dice" + randomNumber3 + ".png");
    document.querySelector(".img4").setAttribute ("src", "dice" + randomnumber4 + ".png");

}

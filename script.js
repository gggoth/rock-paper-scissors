console.log("hello rock paper scissors");

/* 
this function gets the choice of the computer and
0 = rock
1 = paper
2 = scissors
*/

function game(){



}


function playRound(PlayerSelection, computerSelection) {
   
    if (PlayerSelection == "rock" && computerSelection == "paper") {
        return "you lose!"
    }
        else if (PlayerSelection == "rock" && computerSelection == "rock") {
            return "you tie!"}
    
        else if (PlayerSelection == "rock" && computerSelection == "scissors") {
            return "you win!"}

        else if (PlayerSelection == "paper" && computerSelection == "scissors") {
            return "you lost!"}

        else if (PlayerSelection == "paper" && computerSelection == "rock") {
            return "you win!"}

        else if (PlayerSelection == "paper" && computerSelection == "paper") {
            return "you tie!"}

        else if (PlayerSelection == "scissors" && computerSelection == "scissors") {
            return "you tie!"}

        else if (PlayerSelection == "scissors" && computerSelection == "rock") {
            return "you lose!"}

        else if (PlayerSelection == "scissors" && computerSelection == "paper") {
            return "you win!"}

}


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()* 3);
       
    if (computerChoice == 0) {
        return "rock";
        }
        else if (computerChoice == 1) {
            return "paper";
            }
        else {
            return "scissors";
        }
}


let PlayerSelection = prompt("choose weapon:").toLowerCase();
console.log(PlayerSelection);
let computerSelection = getComputerChoice();
console.log(computerSelection);



console.log(playRound(PlayerSelection, computerSelection))
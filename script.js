console.log("hello rock paper scissors");

/* 
this function gets the choice of the computer and
0 = rock
1 = paper
2 = scissors
*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()* 3);
    return computerChoice;
}
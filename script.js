console.log("hello rock paper scissors");

/* 
this function gets the choice of the computer and
0 = rock
1 = paper
2 = scissors
*/

let rock = "Rock!"
let paper = "Paper!"
let scissors = "Scissors!"

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()* 3);
       
    if (computerChoice == 0) {
        return rock;
        }
        else if (computerChoice == 1) {
            return paper;
                    }
        else {
            return scissors;
        }

    
}


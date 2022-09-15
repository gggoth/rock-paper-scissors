console.log("This is Rock Paper Scissors è_é");

/* 
this function gets the choice of the computer and
0 = rock
1 = paper
2 = scissors
*/

let scoreComputer = 0;
let scorePlayer = 0; 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let PlayerSelection = button.id;
        let computerSelection = getComputerChoice(); 
        console.log(PlayerSelection);
        console.log(computerSelection);
        
        
        playRound(PlayerSelection, computerSelection);
        console.log(scorePlayer);
        console.log(scoreComputer);
           
        
    })
})


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

function playRound(PlayerSelection, computerSelection) {
    
    if (PlayerSelection == "rock" && computerSelection == "paper") {
        scoreComputer = ++scoreComputer;
        alert("you lose!");
    }
        else if (PlayerSelection == "rock" && computerSelection == "rock") {
            alert("you tie!");
        }
    
        else if (PlayerSelection == "rock" && computerSelection == "scissors") {
            scorePlayer = ++scorePlayer;
            alert("you win!");
             }

        else if (PlayerSelection == "paper" && computerSelection == "scissors") {
            scoreComputer = ++scoreComputer;
            alert("you lose!");
        }

        else if (PlayerSelection == "paper" && computerSelection == "rock") {
            scorePlayer = ++scorePlayer;
            alert("you win!");
        }

        else if (PlayerSelection == "paper" && computerSelection == "paper") {
            alert("you tie!");
        }

        else if (PlayerSelection == "scissors" && computerSelection == "scissors") {
            alert("you tie!");
        }

        else if (PlayerSelection == "scissors" && computerSelection == "rock") {
            scoreComputer = ++scoreComputer;
            alert("you lose!");
        }

        else if (PlayerSelection == "scissors" && computerSelection == "paper") {
            scorePlayer = ++scorePlayer;
            alert("you win!");
        }

        else if (PlayerSelection != "scissors" && PlayerSelection != "rock" && PlayerSelection != "paper") {
            return "sorry, your weapons are: rock, paper, scissors"
        }
    }





/* const btn = document.querySelector('#rock');
btn.addEventListener('click', function(e) {
    console.log(e);
});




/* function getComputerChoice() {
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

let computerSelection = getComputerChoice();
        console.log(computerSelection);


function playRound(PlayerSelection, computerSelection) {
    
    if (PlayerSelection == "rock" && computerSelection == "paper") {
        scoreComputer = ++scoreComputer;
        alert("you lose!");
    }
        else if (PlayerSelection == "rock" && computerSelection == "rock") {
            alert("you tie!");
        }
    
        else if (PlayerSelection == "rock" && computerSelection == "scissors") {
            scorePlayer = ++scorePlayer;
            alert("you win!");
             }

        else if (PlayerSelection == "paper" && computerSelection == "scissors") {
            scoreComputer = ++scoreComputer;
            alert("you lose!");
        }

        else if (PlayerSelection == "paper" && computerSelection == "rock") {
            scorePlayer = ++scorePlayer;
            alert("you win!");
        }

        else if (PlayerSelection == "paper" && computerSelection == "paper") {
            alert("you tie!");
        }

        else if (PlayerSelection == "scissors" && computerSelection == "scissors") {
            alert("you tie!");
        }

        else if (PlayerSelection == "scissors" && computerSelection == "rock") {
            scoreComputer = ++scoreComputer;
            alert("you lose!");
        }

        else if (PlayerSelection == "scissors" && computerSelection == "paper") {
            scorePlayer = ++scorePlayer;
            alert("you win!");
        }

        else if (PlayerSelection != "scissors" && PlayerSelection != "rock" && PlayerSelection != "paper") {
            return "sorry, your weapons are: rock, paper, scissors"
        }
    }


*/




/* function game(){
    for (let i = 1; i <= 5; i++) {
    
        function playRound(PlayerSelection, computerSelection) {
    
            if (PlayerSelection == "rock" && computerSelection == "paper") {
                scoreComputer = ++scoreComputer;
                return "you lose!"
            }
                else if (PlayerSelection == "rock" && computerSelection == "rock") {
                    return "you tie!"}
            
                else if (PlayerSelection == "rock" && computerSelection == "scissors") {
                    scorePlayer = ++scorePlayer;
                    return "you win!"
                     }

                else if (PlayerSelection == "paper" && computerSelection == "scissors") {
                    scoreComputer = ++scoreComputer;
                    return "you lose!"}

                else if (PlayerSelection == "paper" && computerSelection == "rock") {
                    scorePlayer = ++scorePlayer;
                    return "you win!"}

                else if (PlayerSelection == "paper" && computerSelection == "paper") {
                    return "you tie!"}

                else if (PlayerSelection == "scissors" && computerSelection == "scissors") {
                    return "you tie!"}

                else if (PlayerSelection == "scissors" && computerSelection == "rock") {
                    scoreComputer = ++scoreComputer;
                    return "you lose!"}

                else if (PlayerSelection == "scissors" && computerSelection == "paper") {
                    scorePlayer = ++scorePlayer;
                    return "you win!"}

                else if (PlayerSelection != "scissors" && PlayerSelection != "rock" && PlayerSelection != "paper") {
                    return "sorry, your weapons are: rock, paper, scissors"
                }
          
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


        let PlayerSelection = prompt("choose weapon:", "rock, paper or scissors").toLowerCase();
        console.log(PlayerSelection);

        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        

        console.log(playRound(PlayerSelection, computerSelection));
        console.log("Your score: " + scorePlayer);
        console.log("Computer's score: " + scoreComputer);

}


}

function finalScore() {
    if (scorePlayer > scoreComputer) {
        return "Computer: " + scoreComputer + "\nYou: " + scorePlayer +"\ncongrats you won!" 
    }
    else if (scoreComputer == scorePlayer) {
        return "Computer: " + scoreComputer + "\nYou: " + scorePlayer + "\nit's a tie!"
    }
    else if (scoreComputer > scorePlayer) {
        return "Computer: " + scoreComputer + "\nYou: " + scorePlayer + "\nah you lost!"
    }
}

console.log(game());
console.log(finalScore()); */

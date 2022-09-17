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
            const container = document.querySelector('#score');
            const score5 = document.createElement('div');
            score5.textContent = "Score: " +  scorePlayer + " " + scoreComputer;
            score5.style.cssText = "margin-top: 10px;"
            container.appendChild(score5);
            const score3 = document.createElement('div'); 
            score3.textContent = "You: " + PlayerSelection + " Computer: " + computerSelection
            score3.style.cssText = "margin-bottom: 20px;"
            container.appendChild(score3);
    }
    )
})


const btn = document.querySelector('#playAgain');
btn.addEventListener('click', () => {
    scoreComputer = 0;
    scorePlayer = 0;
    document.querySelector("#rock").disabled = false;
    document.querySelector("#paper").disabled = false;
    document.querySelector("#scissors").disabled = false;
        const container = document.querySelector('#score');
        container.textContent = "Score: 0 0";

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


function endGame(){
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
    const container = document.querySelector('#score');
        const score = document.createElement('div');
        const score1 = document.createElement('div');
        const score2 = document.createElement('div');
        score.textContent = " ";
        score1.textContent = "Your Score: " + scorePlayer;
        score2.textContent = "Computer Score: " + scoreComputer;
        score2.style.cssText = "padding-bottom: 30px;"
        if (scorePlayer > scoreComputer) {
            const score7 = document.createElement('div');
            score7.textContent = "Congrats! you won!"
            score7.style.cssText = "font-weight: bold;"
            container.appendChild(score7);
            
        }
            else {
                const score8 = document.createElement('div');
            score8.textContent = "Almost! the computer won!"
            score8.style.cssText = "margin-top: 30px; font-weight: bold;"
            container.appendChild(score8);
            }
        container.appendChild(score);
        container.appendChild(score1);
        container.appendChild(score2);
        score5.textContent = " ";
}


function playRound(PlayerSelection, computerSelection) {
    if (PlayerSelection == "rock" && computerSelection == "paper") {
        /* alert("you lose!"); */     
        scoreComputer = ++scoreComputer;
        if (scoreComputer == 5 || scorePlayer == 5) {
            alert("game finished");
            endGame();
        }
        else {
        }
    }
    else if (PlayerSelection == "rock" && computerSelection == "rock") {
            /* alert("you tie!"); */
            
        }
    
    else if (PlayerSelection == "rock" && computerSelection == "scissors") {
            /* alert("you win!"); */
            scorePlayer = ++scorePlayer;
            if (scoreComputer == 5 || scorePlayer == 5) {
                alert("game finished"); 
                endGame();
            }
            else {}
            
            
             }

    else if (PlayerSelection == "paper" && computerSelection == "scissors") {
            /* alert("you lose!"); */
            scoreComputer = ++scoreComputer;
            if (scoreComputer == 5 || scorePlayer == 5) {
                alert("game finished");
                endGame();
            }
            else {     
            }
        }

    else if (PlayerSelection == "paper" && computerSelection == "rock") {
            /* alert("you win!"); */
            scorePlayer = ++scorePlayer;
            if (scoreComputer == 5 || scorePlayer == 5) {
                alert("game finished");
                endGame();
            }
            else {
            
             }
        }

    else if (PlayerSelection == "paper" && computerSelection == "paper") {
            /* alert("you tie!"); */
        }

    else if (PlayerSelection == "scissors" && computerSelection == "scissors") {
            /* alert("you tie!"); */
        }

    else if (PlayerSelection == "scissors" && computerSelection == "rock") {
            /* alert("you lose!"); */
            scoreComputer = ++scoreComputer;
            if (scoreComputer == 5 || scorePlayer == 5) {
                alert("game finished");
                endGame();
            }
            else {     
            
        }
        }

    else if (PlayerSelection == "scissors" && computerSelection == "paper") {
            /* alert("you win!"); */
            scorePlayer = ++scorePlayer;
            if (scoreComputer == 5 || scorePlayer == 5) {
                alert("game finished");
                endGame();
            }
            else {
            
            }
        }

    else if (PlayerSelection != "scissors" && PlayerSelection != "rock" && PlayerSelection != "paper") {
            return "sorry, your weapons are: rock, paper, scissors"
        }
}
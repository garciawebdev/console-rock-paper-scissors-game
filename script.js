let playerSelection = prompt('Pick: rock, paper, or scissors').toLowerCase();
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0; 




function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3 + 1);
        switch (randomNumber){
            case 1:
                return 'rock';
            case 2: 
                return 'paper';
            case 3: 
                return 'scissors';
        }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'rock'){
        return `It's a tie you both played ${playerSelection}!`
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    } else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`    
    }

    if(playerSelection == 'paper' && computerSelection == 'paper'){
        return `It's a tie you both played ${playerSelection}!`;
    } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    } else if(playerSelection == 'paper' && computerSelection == 'roc'){
        playerScore++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`
    }

    if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        return `It's a tie you both played ${playerSelection}!`;
    } else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!` 
    }
}




console.log(playerScore);
console.log(computerScore);


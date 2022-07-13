let playerSelection = 'Rock'.toLowerCase();
let computerSelection = computerPlay();

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3 + 1);
        switch (randomNumber){
            case 1:
                return 'rock';
                break;
            case 2: 
                return 'paper';
                break;
            case 3: 
                return 'scissors';
                break;
        }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'rock'){
        return `It's a tie you both played ${playerSelection}!`;
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    } else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`
    }

    if(playerSelection == 'paper' && computerSelection == 'paper'){
        return `It's a tie you both played ${playerSelection}!`;
    } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    } else if(playerSelection == 'paper' && computerSelection == 'roc'){
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`
    }

    if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        return `It's a tie you both played ${playerSelection}!`;
    } else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`
    }
}

console.log(playRound(playerSelection,computerSelection));
console.log(computerSelection)
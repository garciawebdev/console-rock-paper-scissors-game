
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
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
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

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('Pick: rock, paper, or scissors').toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Players score: ${playerScore}`);
        console.log(`Computers score: ${computerScore}`);
        
    }
    if (playerScore < computerScore){
        console.log('You lost this best to five')
    } else if (playerScore > computerScore){
        console.log('You won this best to five')
    }
}

game();


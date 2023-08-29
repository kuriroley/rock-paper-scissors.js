let computerScore = 0;
let playerScore = 0;
let playerAnswer = '';
let computerAnswer = getComputerAnswer();

//dom documents
const scoreContainer = document.querySelector('#score-container');
const paraPlayerScore = document.createElement('p');
const paraComputerScore = document.createElement('p');
const paraGameResult = document.createElement('p');
const paraRoundTracker = document.createElement('p');
const winnerContainer = document.querySelector('#winner-container');
const winnerIs = document.createElement('h1');
const paraPlayerAnswer = document.createElement('p');
const paraComputerAnswer = document.createElement('p');
//dom buttons
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorButton = document.querySelector('#scissor-button');

const resetButton = document.querySelector('#game-reset');

//style for some dom elements
document.querySelector('#game-reset').style.display = 'none';
//dom buttons events

rockButton.addEventListener('click', () =>{
    playerAnswer = 'rock';
    computerAnswer = getComputerAnswer();
    gameRound(playerAnswer, computerAnswer);
    gameData();
    if(playerScore === 5 || computerScore === 5){
        declareWinner();
        document.querySelector('#game-reset').style.display = 'block';
     }

})
paperButton.addEventListener('click', () => {
    playerAnswer = 'paper';
    computerAnswer = getComputerAnswer();
    gameRound(playerAnswer, computerAnswer);
    gameData();
    if(playerScore === 5 || computerScore === 5){
        declareWinner();
        document.querySelector('#game-reset').style.display = 'block';
     }
})
scissorButton.addEventListener('click', () => {
    playerAnswer = 'scissor';
    computerAnswer = getComputerAnswer();
    gameRound(playerAnswer, computerAnswer);
    gameData();
    if(playerScore === 5 || computerScore === 5){
        declareWinner();
        document.querySelector('#game-reset').style.display = 'block';
     }
})
resetButton.addEventListener('click', ()=>{
    restartGame();
});

//get computer answer funtion
function getComputerAnswer(){
    const choices = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * choices.length);
    let computerOption = '';
    if (random === 0){
        computerOption = 'rock';
    } else if (random === 1){
        computerOption = 'paper';
    } else if (random === 2){
        computerOption = 'scissor';
    }
    return computerOption;
}
//main game function that sets a round
function gameRound(playerAnswer, computerAnswer){
    let gameResult = '';
    if (playerAnswer === computerAnswer){
        gameResult = 'tie';
    } else if (playerAnswer === 'rock' && computerAnswer === 'scissor'){
        gameResult = 'rock wins';
        playerScore++;
    } else if (playerAnswer === 'scissor' && computerAnswer === 'paper'){
        gameResult = 'player scissor wins';   
        playerScore++;
    } else if (playerAnswer === 'paper' && computerAnswer === 'rock'){
        gameResult = 'player paper wins!';
        playerScore++;
    } else {
        gameResult = `Computer's ${computerAnswer} win!`;
        computerScore++;
    }
    return gameResult;
}
// a function to declare the end of the game
function declareWinner(){
    if(playerScore == computerScore){
        winnerContainer.appendChild(winnerIs);
        winnerIs.textContent = 'IS A TIE!';
    }
    else if(playerScore > computerScore){
        winnerContainer.appendChild(winnerIs);
        winnerIs.textContent = 'YOU WIN!';
    } else{
        winnerContainer.appendChild(winnerIs);
        winnerIs.textContent = 'COMPUTER WINS! ';
        
    }
}
function gameData(){
scoreContainer.appendChild(paraPlayerAnswer);
paraPlayerAnswer.textContent = `Your choice was: ` + playerAnswer;
scoreContainer.appendChild(paraComputerAnswer);
paraComputerAnswer.textContent = `Computer's answer was: ` + computerAnswer;
scoreContainer.appendChild(paraPlayerScore);
paraPlayerScore.textContent = `Player score is: ${playerScore}`;
scoreContainer.appendChild(paraComputerScore);
paraComputerScore.textContent = `Computer score is: ${computerScore}`;
}
//function to restart the game
function restartGame(){
    playerScore = 0;
    computerScore = 0;
    scoreContainer.textContent = '';
    winnerContainer.textContent = '';
    document.querySelector('#game-reset').style.display = 'none';
}
/* 
 - the computer is able to return values, but i cannot set a way to perform a game? 

*/
let gameRounds = 1;
function game(){

    function playRound (playerSelection, computerSelection){   //the values work! 
    
        let gameResult = ''
        
        if (playerSelection === computerSelection){
                gameResult = 'tie // あいこ';
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
                gameResult = 'paper wins! // パー勝った'
        } else if (playerSelection === 'rock'&& computerSelection === 'scissor'){
                gameResult = 'rock wins! // グ－勝った'
        } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
                gameResult = 'scissor wins! // チョキ勝った'
        } else {
                gameResult = 'Computer wins! // パソコン勝った'
        }
        return gameResult;
    }

    function getComputerChoice(){       // it works, the value is randomly returned
        let result = '';
        let choice = Math.floor(Math.random() * 3 ) + 1 ;
        if (choice === 1 ){
            result = 'Rock';
        } else if (choice === 2 ){
            result = 'Paper';
        } else if (choice === 3 ){
            result = 'Scissor';
        } else {
            ' '
        }
        return result;
    }
    const playerSelection = (prompt('じゃんけん! // rock, paper or scissors ??? ').toLowerCase());
    const computerSelection = (getComputerChoice().toLowerCase());
    console.log(computerSelection)
    console.log('ラウンド/Rounds: ' + gameRounds)
    console.log(playRound(playerSelection, computerSelection));
    gameRounds++;

}
do{
    game()
}while (gameRounds <= 5)











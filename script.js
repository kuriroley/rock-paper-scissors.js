/* 
 - The computer needs to drop a random value from 3 values.
 - Once the computer has decided a value, this has to be returned. (It is the function main function).
 - The idea is that the computer returns a string value, but for now, lets try with numbers.

*/

function playRound (playerSelection, computerSelection){
    
}
function getComputerChoice(){
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
const playerSelection = prompt('rock, paper or scissors ??? ');
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));






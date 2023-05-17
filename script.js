/* 

This is a rock, paper and scissors game,
The user has to enter a value "rock, paper or scissors"
once the value has been entered, the computer must have 
previously loaded a value which could be of of three prior values
 "rock, paper and scissor". 
 The values are compared, if they are equal there is a draw,
 if they are not equal, either the computer or the player has won.
 -rock beats scissors
 -scissors beat paper
 -paper beat rock

 if the player loses, the game ends.
 if the player wins, the game ends.
 - by both winning or losing, the game starts again.
 
 */

 function getComputerChoice(){
    let rock = 'rock'
    let scissor = 'scissor'
    let paper = 'paper'
    let result = rock * scissor * paper;
    return result;
 }
 console.log(getComputerChoice);
//CORE FUNCTIONS 
const cchoice = ['rock','paper', 'scissors'];

function getComputerChoice(){  //computer choses between 3 choices from array above .

    const randomchoice = Math.floor(Math.random() * cchoice.length); 
    return cchoice[randomchoice];
}
 
let playerselection = null;     //player input variable.
let computerselection = null;  //computer input variable.
let computerpoint = 0;        //player score variable.
let playerpoint =0;          // computer score variable.
let time = 0;
const pscore = document.querySelector(".pscore");
const cscore = document.querySelector(".cscore");
const rock   = document.querySelector(".rock");
const paper  = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const win = document.querySelector("#message");
const lose = document.querySelector("#message2");
const circle = document.querySelector(".circle");
const rem = document.querySelector('.btn');

function playround(playerselection,computerselection){ // play a round of rock paper scissors.

    console.log(playerselection);
    console.log(computerselection);


        if(playerselection === computerselection){  //iterates through every combination of choices to check for winner.
            return "It's a Tie.";
        }
        
        else if(playerselection == 'paper' && computerselection == 'rock'){
            
            playerpoint ++;
            return 'You Win, paper beats rock.';
        }
        else if(playerselection == 'rock' && computerselection == 'paper'){
            
            computerpoint ++;
            return 'You lose, paper beats rock.';
        }
        else if(playerselection == 'scissors' && computerselection == 'rock'){
            
            computerpoint ++;
            return 'You lose, rock beats scissors.';
        }
        else if(playerselection == 'rock' && computerselection == 'scissors'){
            playerpoint ++;
            return 'You win, rock beats scissors.';
        }
        else if(playerselection == 'scissors' && computerselection == 'paper'){
            playerpoint ++;
            return 'You Win, scissors beats paper.';
        }  
        else if(playerselection == 'paper' && computerselection == 'scissors'){
            computerpoint ++;
            return 'You lose, scissors beats paper.';
        }  
    }
      
      
      rock.addEventListener('click',function(e){
            playerselection = 'rock';
            game();
      });

      paper.addEventListener('click',function(e){
        playerselection = 'paper';
        game();
      });
      
      scissors.addEventListener('click',function(e){
        playerselection = 'scissors';
        game();
      });
       
      pscore.textContent = `Player Points: ${playerpoint}`   ;
      cscore.textContent = 'Computer Points:' + ' ' + computerpoint;
      
        
        

function game(){ //play a game consisting of no. of rounds selected  by user.
        
       computerselection = getComputerChoice();

        playround(playerselection,computerselection);

        pscore.textContent = `Player Points: ${playerpoint}`   ;
        cscore.textContent = `Computer Points: ${computerpoint}` ;
        time ++;
          
        if(time === 5){

         if(playerpoint > computerpoint){ // compare both the scores and declare a winner.
            
            win.textContent = 'You Win';
            circle.classList.add('glowin')
            rem.remove();
        
        }
        else if(playerpoint === computerpoint){
            win.textContent = 'TIE';
            rem.remove();
           
        }
        else if(playerpoint < computerpoint){
            
            lose.textContent = 'You Lose';
            circle.classList.add('glolose');
            rem.remove();
           
        }

        return;
    }

    }



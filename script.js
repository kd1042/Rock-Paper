
const cchoice = ['rock','paper', 'scissors'];

function getComputerChoice(){

    const randomchoice = Math.floor(Math.random() * cchoice.length);
    return cchoice[randomchoice];
}

let playerselection = null;
let computerselection = null;
let computerpoint = 0;
let playerpoint =0;

function playround(playerselection,computerselection){

    console.log(playerselection);
    console.log(computerselection);


        if(playerselection === computerselection){
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

    function game(rounds){

        for(i = 1; i <= rounds; i++){

           playerselection = prompt('Select: rock,paper,scissors');
           computerselection= getComputerChoice();
           console.log(playround(playerselection,computerselection));

        }
        if(playerpoint > computerpoint){
            
            console.log('player' + ' ' + playerpoint);
            console.log('computer' + ' ' + computerpoint);
            return 'Congratulations! You Won The Game.';
        }
        else if(playerpoint === computerpoint){
          
            console.log('player' + ' ' + playerpoint);
            console.log('computer' + ' ' + computerpoint);
            return "It's A Tie";
        }
        else if(playerpoint < computerpoint){

            console.log('player' + ' ' + playerpoint);
            console.log('computer' + ' ' + computerpoint);
            return 'Better luck next time. You Lost the Game.';

        }

    }



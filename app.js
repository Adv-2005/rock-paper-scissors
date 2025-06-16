

function getComputerChoice(){
    let computerChoice=Math.floor(Math.random()*3)
    if (computerChoice==0){
         return "rock"
    }
    else if(computerChoice ==1){
        return "paper"
    }
    else if(computerChoice==2){
        return "scissors"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter Your Choice")
    if(!humanChoice){
        alert("enter Choice")
    }
    humanChoice = humanChoice.toLowerCase()

    if(humanChoice !=="rock" && humanChoice !=="paper" && humanChoice !=="scissors"){
        alert("Invalid Choice")
        return getHumanChoice()
    }
    return humanChoice
}

let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice== computerChoice){
       return "Draw"
    }
    else if(
         (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  
    ){
    humanScore++;
    return "you won this round";
    }
    else{
        ComputerScore++;
        return "you lost this round"
    }
}



let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

let roundResult = document.getElementById("round-results")
let score = document.getElementById("score")
let finalWinner = document.getElementById("final-winner")



function updateDisplay(humanChoice,computerChoice, result){
    roundResult.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}. Result: ${result}`
    score.textContent = `Human: ${humanScore} | Computer: ${ComputerScore}`

}

rock.addEventListener('click', ()=>handleClick('rock'))
paper.addEventListener('click', ()=>handleClick('paper'))
scissors.addEventListener('click', ()=>handleClick('scissors'))

function handleClick(humanChoice){
    if(humanScore<5 && ComputerScore<5){
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice)
        updateDisplay(humanChoice, computerChoice, result)
        checkWinner();
    }
}

function disableButtons(){
    rock.disabled=true
    paper.disabled=true
     scissors.disabled=true

}

function checkWinner(){
    if(humanScore==5){
        finalWinner.textContent = "You won the game. Refresh to restart"
        disableButtons()
    }
    else if(ComputerScore==5){
        finalWinner.textContent = "You lost the game. Refresh to restart"
        disableButtons()
    }
}


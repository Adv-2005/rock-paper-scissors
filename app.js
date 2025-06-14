

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

function playround(humanChoice,computerChoice){
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

function playGame(playRound){
    while(humanScore<5 && ComputerScore<5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice)
    console.log("Computer Choice", computerChoice)
        console.log("Your Choice", humanChoice)
        console.log(result)
        console.log(`Scores: Computer: ${ComputerScore} || Human: ${humanScore}`)
    }
    if(humanScore==5){
        console.log("You won the game"); 
    }
    if(ComputerScore==5){
        console.log("You lost the game")
    }
}



playGame(playround)

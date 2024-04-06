let compScore=0;
let userScore=0;

const choices = document.querySelectorAll(".choice");

const genCOmChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx= MAth.floor(MAth.random()*3);
     return options[randIdx];

};
const drewGame= () =>{
    console.log("game was drew");

};
const showWinner=(userWin) =>{
    if (userWin){
        console.log("you  win!");
    }else{
        console.log("you lose!");
    }
}
const playGAme=(userChoice) => {
console.log("user choice =",userChoice);
const compChoice = genCampChoice();
console.log("comp choice =", compChoice);

if(userChoice === comChoice){
    drawGAme()
} else{
    let userWin= true;
    if(userChoice==="rock"){
        userWin=compChoice === "paper" ? false : true;
    } else if(userChoice ==="paper") {
        userwin= compChoice ==="scissors" ? false : true;
    }
    
    else{
        userWin=comChoice==="rock"? false : true
    }
    showWinner(userWin);
}

}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playGAme(userChoice);
    });
});
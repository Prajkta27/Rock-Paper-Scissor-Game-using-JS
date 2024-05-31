let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game was draw, please try again!";
    msg.style.backgroundColor = "blackx";
}

const showWinner = (userWin)=>{
    if(userWin)
        {
            console.log("Ohhh, you won:))");
            msg.innerText = "Ohhh, you won:))";
            msg.style.backgroundColor = "green";
        }
    else{
        console.log("Oppss, you lost!!");
        msg.innerText = "Oppss, you lost!!";
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice= () =>{
    const options =["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame =((userChoice) =>{
    console.log("user choice = ", userChoice);
    let compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    
if(userChoice === compChoice)
        {
            drawGame();
        }
    else{
        let userWin = true;
        if(userChoice == "rock")
            {
                userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper")
            {
                userWin = compChoice === "scissor"? false : true;
        }else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
    
})

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>
    {
        const userChoice= choice.getAttribute("id");          //to know particularly which choice was clicked
        playGame(userChoice);   
    })
})

let userScore = 0;
let macScore = 0;
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const macScorePara = document.querySelector("#mac-score");


let choices = document.querySelectorAll(".choice");

const genMacChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options [randomIdx];
}

const drawGame = () => {
    console.log("The Game is drawGame.");
    msg.innerText = "The Game is Draw. Play Again!";
    msg.style.backgroundColor = "#457b9d";

}

const showWinner = (userWin, userChoice, macChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${macChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        macScore++;
        macScorePara.innerText = macScore;
        msg.innerText = `You Lose ${macChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    const macChoice = genMacChoice();
    console.log("Machine Choice =", macChoice);

    if(userChoice === macChoice) {
        drawGame();
    } else {
            let userWin = true;
            if(userChoice === "rock") {
                userWin = macChoice === "paper" ? true : false;
            }
            else if (userChoice === "paper") {
                userWin = macChoice === "scissors" ? true : false;
            }
            else {userChoice === "scissors"
                userWin = macChoice === "rock" ? true : false;
            }
            showWinner(userWin, userChoice, macChoice);
        }
    }



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
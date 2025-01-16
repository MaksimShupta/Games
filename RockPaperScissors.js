const randomNumber = Math.random();
const readline = require("node:readline");
main();

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`Enter rock,paper or scissors!`, (reply) => {
        if (reply === "scissors" || reply === "paper" || reply === "rock") {
            computerChoice(reply);
        } else {
            console.log("You've entered something else. Expected: scissors, paper or rock!");
            console.log("Try again!");
            //main();
        }
        rl.close();
    });
}

function computerChoice(reply) {
    console.log("You've chosen " + reply);
    if (randomNumber >= 0.7) {
        console.log("Computer has chosen the scissors");
        if (reply === "scissors") {
            console.log("We have a draw!");
        }
        if (reply === "rock") {
            console.log("You won!");
        } else {
            console.log("You lost!");
        }
    } else if (randomNumber >= 0.3 && randomNumber < 0.7) {
        console.log("Computer has chosen a paper");
        if (reply === "scissors") {
            console.log("You won!");
        }
        if (reply === "rock") {
            console.log("You lost!");
        } else {
            console.log("We have a draw!");
        }
    } else if (randomNumber >= 0 && randomNumber < 0.3) {
        console.log("Computer has chosen a rock");
        if (reply === "scissors") {
            console.log("You lost!");
        }
        if (reply === "rock") {
            console.log("We have a draw!");
        } else {
            console.log("You won!");
        }
    }
}

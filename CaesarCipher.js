const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Enter a phrase to encrypt:`, (reply) => {
    const data = reply.split(",");
    input = data[0].trim();
    if (!Array.from(input.matchAll(/\b[a-zA-Z]+\b/g)).length) {
        console.log("Error:", "\x1b[31mYour input must be literal!");
        rl.close();
        return;
    }
    const shift = data[1].trim();
    console.log("I\x1b[33mnput: ", reply);
    console.log("\x1b[32mCAESAR CIPHER: " + "\x1b[32m" + caesarCipherEncrypt(input, Number(shift)));
    rl.close();
});

const caesarCipherEncrypt = (text, shift) => {
    //This code extracts all words from a string and puts them into an array. Then each word is turned into array of characters.
    //each letter turns in its ASCII code/number and then it is shifted to the left/right and in the end is turned in corresponding character
    return Array.from(text.matchAll(/\b[a-zA-Z]+\b/g), (match) => match[0])
        .map((word) => word.split(""))
        .map((element) => element.map((ch) => String.fromCharCode(ch.charCodeAt(0) + shift)))
        .map((e) => e.join(""))
        .map((encrypt) => (encrypt += " "))
        .join("");
};

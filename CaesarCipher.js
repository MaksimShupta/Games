const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Enter a phrase to encrypt:`, (reply) => {
    const data = reply.split(",");
    input = data[0].trim();
    const shift = data[1].trim();
    console.log("Input: ", reply);
    console.log("CAESAR CIPHER: " + caesarCipherEncrypt(input, Number(shift)));
    rl.close();
});

const caesarCipherEncrypt = (text, shift) => {
    return Array.from(text.matchAll(/\b\w+\b/g), (match) => match[0])
        .map((word) => word.split(""))
        .map((element) => element.map((ch) => String.fromCharCode(ch.charCodeAt(0) + shift)))
        .map((e) => e.join(""))
        .map((encrypt) => (encrypt += " "))
        .join("");
};

const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
];
const vowels = ["a", "e", "i", "o", "u"];
const readline = require("node:readline");
let input = "";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Enter a word to translate:`, (reply) => {
    input = reply.trim().toLowerCase();
    console.log("Original: " + reply);
    console.log("Pig Latin: " + translatePhraseIntoPigLatin(input));
    rl.close();
});

function translatePhraseIntoPigLatin(phrase) {
    //each word in the phrase is extracted as a separate element of the string array.
    const arrayOfWords = Array.from(phrase.matchAll(/\b\w+\b/g), (match) => match[0]);
    let words = "";
    arrayOfWords.forEach((w) => {
        words = words + " " + translateWordIntoPigLatin(w);
    });
    return words.trim();
}

function translateWordIntoPigLatin(word) {
    let result = "";
    if (word.length < 3) {
        return word;
    }
    //if a word begins with a vowel
    for (const elem of vowels) {
        if (word.startsWith(elem)) {
            result = word.toLowerCase() + "way";
            break;
        }
    }
    //if a word begins with a consonant
    for (const elem of consonants) {
        // has a consonant at the beginning of a word
        if (word.startsWith(elem) && vowels.includes(word[1])) {
            result = word.substring(1, word.length) + word[0] + "ay";
            break;
        } // has at least two consonants at the beginning
        else if (word.startsWith(elem) && consonants.includes(word[1])) {
            result = word.substring(2, word.length) + word.substring(0, 2) + "ay";
            break;
        }
    }
    return result;
}

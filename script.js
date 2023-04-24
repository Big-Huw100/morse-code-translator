// English to Morse Code Object
const engToMorse = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    " ": "/"
};

// Morse to English Code Object
const morseToEng = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "/": " "
};

// Grab my elements
const inputEnglish = document.getElementById("english-input");
const morseTranslateBtn = document.getElementById("morse-button");
const morseTranslation = document.getElementById("morse-translation");

const inputMorse = document.getElementById("morse-input");
const engTranslateBtn = document.getElementById("english-button");
const engTranslation = document.getElementById("english-translation");

// Translate English to Morse
morseTranslateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    morseTranslation.innerHTML = inputEnglish.value.toUpperCase().split("").map(el => {
        return engToMorse[el] ? engToMorse[el] : "";
    }).join(" ");
});

// Translate Morse to English
engTranslateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const morseWords = inputMorse.value.trim().split(" / ");
    const engWords = morseWords.map(morseWord => {
        const morseLetters = morseWord.split(" ");
        const engLetters = morseLetters.map(morseLetter => {
            return morseToEng[morseLetter] || "";
        });
        return engLetters.join("");
    });
    engTranslation.innerHTML = engWords.join(" ");
});

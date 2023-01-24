// English to Morse Code Object
const engToMorse = {
    A : '.-',
    B : '-...',
    C : '-.-.',
    D : '-..',
    E : '.',
    F : '..-.',
    G : '--.',
    H : '....',
    I : '..',
    J : '.---',
    K : '-.-',
    L : '.-..',
    M : '--',
    N : '-.',
    O : '---',
    P : '.--.',
    Q : '--.-',
    R : '.-.',
    S : '...',
    T : '-',
    U : '..-',
    V : '...-',
    W : '.--',
    X : '-..-',
    Y : '-.--',
    Z : '--..',
    " ": "/"
};

// Grab my elements

inputEnglish = document.getElementById("english-input");
morseTranslateBtn = document.getElementById("morse-button");
morseTranslation = document.getElementById("morse-translation");

inputMorse = document.getElementById("morse-input");
engTranslateBtn = document.getElementById("english-button");
engTranslation = document.getElementById("english-translation");

// Translate

morseTranslateBtn.addEventListener("click", () => {
    morseTranslation.innerHTML = inputEnglish.value.toUpperCase().split("").map(el => {
        return engToMorse[el] ? engToMorse[el] : el;
    }).join("");
});
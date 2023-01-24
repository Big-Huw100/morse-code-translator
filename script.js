// English to Morse Code Object
const morseCode = {
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

inputEnglish = document.getElementById("input");
translateBtn = document.getElementById("button");
translation = document.getElementById("translation");

// Translate

translateBtn.addEventListener("click", () => {
    translation.innerHTML = inputEnglish.value.toUpperCase().split("");
});
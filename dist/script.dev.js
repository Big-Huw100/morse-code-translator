"use strict";

// English to Morse Code Object
var morseCode = {
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
}; // Grab my elements

inputEnglish = document.getElementById("input");
translateBtn = document.getElementById("button");
translation = document.getElementById("translation"); // Translate

translateBtn.addEventListener("click", function () {
  translation.innerHTML = inputEnglish.value.toUpperCase().split("").map(function (el) {
    returnmorseCode[el] ? morseCode[el] : el;
  }).join("");
});
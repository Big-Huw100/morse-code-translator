"use strict";

// English to Morse Code Object
var engToMorse = {
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
}; // Morse to English Code Object

var morseToEng = {
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
}; // Grab my elements

var inputEnglish = document.getElementById("english-input");
var morseTranslateBtn = document.getElementById("morse-button");
var morseTranslation = document.getElementById("morse-translation");
var inputMorse = document.getElementById("morse-input");
var engTranslateBtn = document.getElementById("english-button");
var engTranslation = document.getElementById("english-translation"); // Translate English to Morse

morseTranslateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  morseTranslation.innerHTML = inputEnglish.value.toUpperCase().split("").map(function (el) {
    return engToMorse[el] ? engToMorse[el] : "";
  }).join(" ");
}); // Translate Morse to English

engTranslateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var morseWords = inputMorse.value.trim().split(" / ");
  var engWords = morseWords.map(function (morseWord) {
    var morseLetters = morseWord.split(" ");
    var engLetters = morseLetters.map(function (morseLetter) {
      return morseToEng[morseLetter] || "";
    });
    return engLetters.join("");
  });
  engTranslation.innerHTML = engWords.join(" ");
});
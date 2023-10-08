const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let intervals;
let firstCard = false;
let secondCard = false;

//Items array 
const items = [
    { name: "cover", image: "images/card_cover.png" },
    { name: "annularletter", image: "images/annulareclipse.png" },
    { name: "annularimg", image: "images/annular solar eclipse.png" },
    { name: "hybridimg", image: "images/hybrid_merge_960.jpg" },
    { name: "hybridletter", image: "images/hybrid.png" },
    { name: "penumbrameaning", image: "images/meaningpenumbra.png" },
    { name: "umbrameaning", image: "images/umbrameaning.png" },
    { name: "totalletter", image: "images/totalsolareclipse.png" },
    { name: "totalimg", image: "images/total.jpeg" },
    { name: "partialletter", image: "images/partialeclipse.png" },
    { name: "partialimg", image: "images/partialmoon.jpg" },
    { name: "crocodile", image: "crocodile.png" },
    { name: "crocodile", image: "crocodile.png" },
]

// require('../css/styles.css');

import { Game } from './game';

// Elements
const gameContainer = document.querySelector('.game-container');
const gameScore = document.querySelector('.game-score');
const gameLives = document.querySelector('.game-lives');
const gameElement = document.querySelector('.game');
const gameCanvas = document.querySelector('.game-canvas');
const buttonShootContainer = document.querySelector('.button-shoot-container');
const controlsContainer = document.querySelector('.controls-container');

const game = new Game(gameCanvas);

controlsContainer.style.visibility = "hidden";

window.addEventListener('touchstart', () => {
    controlsContainer.style.visibility = "visible";
    window.removeEventListener('touchstart');
}, false);

setTimeout(function() {
    game.draw();
}, 1000);

// Game loop
setInterval(game.update, 40);
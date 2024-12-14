import { Game } from './game';

// Elements
const gameCanvas = document.querySelector('.game-canvas');
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
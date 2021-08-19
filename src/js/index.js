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

//const game = new Game(gameCanvas);

var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


const convertHiDPICanvas = function (canvas, w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas;
}

//Create canvas with the device resolution.
//convertHiDPICanvas(gameCanvas, window.innerWidth * 0.5, window.innerHeight * 0.5);

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
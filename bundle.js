/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/coronavirus.png":
/*!************************************!*\
  !*** ./src/images/coronavirus.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0c893dbfc2fd3d5b92ef503ab67a40e4.png\");\n\n//# sourceURL=webpack://spaceinvaders/./src/images/coronavirus.png?");

/***/ }),

/***/ "./src/images/ship.png":
/*!*****************************!*\
  !*** ./src/images/ship.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4a344ab0894890ea11bc0537c047545b.png\");\n\n//# sourceURL=webpack://spaceinvaders/./src/images/ship.png?");

/***/ }),

/***/ "./src/js/enemy.js":
/*!*************************!*\
  !*** ./src/js/enemy.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enemy)\n/* harmony export */ });\n/* harmony import */ var _src_images_coronavirus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/images/coronavirus.png */ \"./src/images/coronavirus.png\");\n\n\nclass Enemy {\n\n    constructor(canvasElement, x, y, width = 20, height = 20) {\n        this.gameCanvas = canvasElement;\n        this.image = new Image();\n        this.image.src = _src_images_coronavirus_png__WEBPACK_IMPORTED_MODULE_0__.default;\n        this.height = height;\n        this.width = width;\n        this.direction = 'left';\n        this.speed = 0.2;\n        this.x = x;\n        this.y = y;\n        this.canFire = true;\n    }\n\n    update() {\n\n    }\n\n    draw() {\n        const context = this.gameCanvas.getContext('2d');\n\n        if (this.image) {\n            context.drawImage(this.image, this.x, this.y, this.width, this.height);\n        }\n    }\n\n    moveLeft() {\n        this.x -= this.speed;\n    }\n\n    moveRight() {\n        this.x += this.speed;\n    }\n\n    moveDown() {\n        this.y += this.speed;\n    }\n\n    getBoundingRect() {\n        return this.image.getBoundingClientRect();\n    }\n\n    isCollisionDetected(x, y, width, height) {\n        // Horizontal\n        if ((x <= (this.x + this.width) && x >= this.x)\n        || (this.x <= (x + width) && this.x >= x)) {\n            // Vertical\n            if ((y < (this.y + this.height) && y >= this.y)\n            || (this.y < (y + this.height) && this.y >= y)) {\n                return true;\n            }\n        }\n        return false;\n    }\n}\n\n//# sourceURL=webpack://spaceinvaders/./src/js/enemy.js?");

/***/ }),

/***/ "./src/js/explosion.js":
/*!*****************************!*\
  !*** ./src/js/explosion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Explosion)\n/* harmony export */ });\n/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ \"./src/js/particle.js\");\n\n\nclass Explosion {\n  constructor(canvasElement, x, y) {\n    let particles = [];\n\n    // Create some particles\n    for (let i = 0; i < 10; i++) {\n      let speed = Math.random() * 5;\n      let xDirection = Math.random();\n      let yDirection = Math.random();\n      particles.push(\n        new _particle__WEBPACK_IMPORTED_MODULE_0__.default(\n          canvasElement, \n          x,\n          y,\n          { x: xDirection, y: yDirection },\n          speed\n        )\n      );\n      particles.push(\n        new _particle__WEBPACK_IMPORTED_MODULE_0__.default(\n          canvasElement, \n          x,\n          y,\n          { x: xDirection, y: -yDirection },\n          speed\n        )\n      );\n      particles.push(\n        new _particle__WEBPACK_IMPORTED_MODULE_0__.default(\n          canvasElement, \n          x,\n          y,\n          { x: -xDirection, y: yDirection },\n          speed\n        )\n      );\n      particles.push(\n        new _particle__WEBPACK_IMPORTED_MODULE_0__.default(\n          canvasElement, \n          x,\n          y,\n          { x: -xDirection, y: -yDirection },\n          speed\n        )\n      );\n    }\n\n    this.particles = particles;\n    this.lifeTime = 10;\n  } // End constructor\n  \n  update() {\n      this.particles.forEach((particle) => {\n        particle.update();\n      })\n      if (this.lifeTime > 0) {\n          this.lifeTime -= 1;\n      }\n  }\n\n  draw() {\n    this.particles.forEach((particle) => {\n        particle.draw();  \n      })\n  }\n\n  remove() {\n    this.particles = [];\n  }\n}\n\n\n//# sourceURL=webpack://spaceinvaders/./src/js/explosion.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/js/ship.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/js/enemy.js\");\n/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explosion */ \"./src/js/explosion.js\");\n/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectile */ \"./src/js/projectile.js\");\n\n\n\n\n\nclass Game {\n    constructor(gameCanvas, score = 0, lives = 1, speed = 200) {\n        this.keys = {\n            left: false,\n            right: false,\n            space: false,\n        };\n\n        this.sound = new Audio('https://freesound.org/data/previews/259/259681_4157918-lq.mp3');\n        this.sound.load();\n        this.mouseDown = false;\n\n        this.projectiles = [];\n        this.enemies = [];\n        this.projectileWidth = 2;\n        this.projectileHeight = 4;\n        this.maxLevel = 21;\n        this.level = 1;\n        this.score = score;\n        this.lives = lives;\n        this.speed = speed;\n        this.delta = 1 / speed;\n        this.gameCanvas = gameCanvas;\n        this.state = 'New Game';\n        this.dead = false;\n        this.gameFont = \"monospace\";\n\n        this.tickCount = 0;\n        this.explosion = null;\n\n        this.newGame();\n\n        this.update = this.update.bind(this);\n\n        // Event listeners\n        this.keyDownHandlerBind = this.keyDownHandlerBind.bind(this);\n        this.keyUpHandlerBind = this.keyUpHandlerBind.bind(this);\n        this.mouseHandlerBind = this.mouseHandlerBind.bind(this);\n        this.touchHandlerBind = this.touchHandlerBind.bind(this);\n        this.controlsHandlerBind = this.controlsHandlerBind.bind(this);\n\n        document.addEventListener('keydown', this.keyDownHandlerBind);\n        document.addEventListener('keyup', this.keyUpHandlerBind);\n        document.addEventListener('mousedown', this.mouseHandlerBind);\n        document.addEventListener('mouseup', this.mouseHandlerBind);\n        \n        const buttons = document.querySelectorAll('.controls-container button');\n        buttons.forEach(button => {\n            button.addEventListener('click', this.controlsHandlerBind);\n            button.addEventListener('touchend', this.touchHandlerBind);\n            button.addEventListener('touchstart', this.touchHandlerBind);\n            button.addEventListener('touchcancel', this.touchHandlerBind);\n            button.addEventListener('touchmove', this.touchHandlerBind);\n        });\n    }\n\n    newGame() {\n        this.explosion = null;\n        this.keys = {\n            left: false,\n            right: false,\n            space: false,\n        };\n\n        this.mouseDown = false;\n\n        this.projectiles = [];\n        this.enemies = [];\n        if (this.state === 'Won') {\n            this.dead = true;\n        }\n        if (this.dead) {\n            this.score = 0;\n            this.level = 1;\n            this.dead = false;\n            this.lives = 1;\n        }\n\n        this.tickCount = 0;\n\n        // Create game objects\n        if (!this.ship) {\n            this.ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.default(this.gameCanvas);\n        }\n\n        let enemySize = 20 - this.level;\n        if (this.level > 10) {\n            enemySize = 10;\n        }\n        const enemyMinX = this.ship.width;\n        const enemyMaxX = Math.floor(this.gameCanvas.width - (this.ship.width / 2));\n\n        for (let i = 0; i < 2; i++) {\n            this.spawnEnemy('left', enemyMinX, enemyMaxX, enemySize, enemySize);    \n            this.spawnEnemy('right', enemyMinX, enemyMaxX, enemySize, enemySize);\n            this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);\n            this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);\n        }\n        this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);\n        this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);\n        if (this.level > 10) {\n            for (let i = 0; i < (this.level % 10) * 2; i++) {\n                this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);\n                this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);\n            }\n        }\n\n        this.drawNewGame(this.gameCanvas.width / 2, this.gameCanvas.height / 2, 40);\n    }\n\n    spawnEnemy(position = 'top', minX, maxX, width = 20, height = 20) {\n        let x = Math.floor(Math.random() * this.gameCanvas.width - 50);\n        let y = Math.floor(Math.random() * (this.gameCanvas.height / 2));\n\n        switch (position) {\n            case 'top':\n                x = Math.floor(Math.random() * this.gameCanvas.width - 50);\n                y = 5;\n                break;\n            case 'left':\n                x = Math.floor(Math.random() * (this.gameCanvas.width / 3));\n                break;\n            case 'right':\n                x = this.gameCanvas.width - Math.floor(Math.random() * (this.gameCanvas.width / 3));\n                x -= width;\n                if (x > maxX) { x = maxX; }\n                break;\n            case 'middle':\n                const thirdOfCanvas = this.gameCanvas.width / 3;\n                x = Math.floor(Math.random() * thirdOfCanvas) + thirdOfCanvas;\n                break;\n            default:\n                break;\n        }\n        \n        if (x <= minX) { x = minX; }\n        if (y < 0) { y = 0; }\n\n        this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_1__.default(this.gameCanvas, x, y, width, height));\n    }\n\n    controlsHandlerBind(e) {\n        if (e.target.id === 'control-left') {\n            this.ship.moveLeft();\n        } else if (e.target.id === 'control-right') {\n            this.ship.moveRight();\n        } else if (e.target.id === 'control-shoot') {\n            this.fire();\n        }\n    }\n    \n    touchHandlerBind(e) {\n        e.preventDefault();\n        if (e.type === \"touchstart\") {\n            if (e.target.id === 'control-left') {\n                this.keys['left'] = true;\n            } else if (e.target.id === 'control-right') {\n                this.keys['right'] = true;\n            } else if (e.target.id === 'control-shoot') {\n                this.keys['space'] = true;\n            }\n        } else if (e.type === \"touchend\") {\n            if (e.target.id === 'control-left') {\n                this.keys['left'] = false;\n            } else if (e.target.id === 'control-right') {\n                this.keys['right'] = false;\n            } else if (e.target.id === 'control-shoot') {\n                this.keys['space'] = false;\n            }\n        }\n    }\n\n    mouseHandlerBind(e) {\n        if (e.buttons > 0) {\n            this.mouseDown = true;\n        } else {\n            this.mouseDown = false;\n        }\n    }\n\n    keyDownHandlerBind(e) {\n        if (e.key === 'a') { this.keys['left'] = true; }\n        if (e.key === 'ArrowLeft') {\n            this.keys['left'] = true;\n        }\n\n        if (e.key === 'd') { this.keys['right'] = true; }\n        if (e.key === 'ArrowRight') {\n            this.keys['right'] = true;\n        }\n\n        if (e.key === ' ') {\n            this.keys['space'] = true;\n        }\n    }\n\n    keyUpHandlerBind(e) {\n        if (e.key === 'a') { this.keys['left'] = false; }\n        if (e.key === 'ArrowLeft') {\n            this.keys['left'] = false;\n        }\n\n        if (e.key === 'd') { this.keys['right'] = false; }\n        if (e.key === 'ArrowRight') {\n            this.keys['right'] = false;\n        }\n\n        if (e.key === ' ') {\n            this.keys['space'] = false;\n        }\n    }\n\n    drawWonScreen(x, y, fontSize) {\n        const context = this.gameCanvas.getContext('2d');\n        context.fillStyle = '#FFF';\n        context.font = `${fontSize}px ${this.gameFont}`;\n        const text = \"You beat COVID!\";\n        let textWidth = context.measureText(text).width;\n\n        context.fillText(text, x - (textWidth / 2), y - (fontSize / 2));\n\n        const controlsFontSize = fontSize / 3;\n        context.font = `bold ${controlsFontSize}px ${this.gameFont}`;\n        const controls = \"Press shoot to play again\";\n        textWidth = context.measureText(controls).width;\n        context.fillText(controls, x - (textWidth / 2), y + controlsFontSize);\n        return;\n    }\n\n    drawGameOver(x, y, text, fontSize) {\n        const context = this.gameCanvas.getContext('2d');\n        context.fillStyle = '#FFF';\n        context.font = `${fontSize}px ${this.gameFont}`;\n\n        const textWidth = context.measureText(text).width;\n\n        context.fillText(text, x - (textWidth / 2), y);\n    }\n\n    drawInstructions(x, y, fontSize) {\n        const context = this.gameCanvas.getContext('2d');\n        context.fillStyle = '#FFF';\n        context.font = `${fontSize}px ${this.gameFont}`;\n        const text = `Press shoot to continue`;\n        const textWidth = context.measureText(text).width;\n\n        context.fillText(text, x - (textWidth / 2), y + (fontSize / 2));\n    }\n\n    drawLevel(x, y, level, fontSize) {\n        const context = this.gameCanvas.getContext('2d');\n        context.fillStyle = '#FFF';\n        context.font = `${fontSize}px ${this.gameFont}`;\n        const text = `Level: ${level}`;\n        const textWidth = context.measureText(text).width;\n\n        context.fillText(text, x - (textWidth / 2), y);\n    }\n\n    drawNewGame(x, y, fontSize) {\n        const context = this.gameCanvas.getContext('2d');\n        context.fillStyle = '#FFF';\n        context.font = `${fontSize}px ${this.gameFont}`;\n        const text = \"New Game\";\n        let textWidth = context.measureText(text).width;\n\n        context.fillText(text, x - (textWidth / 2), y - (fontSize / 2));\n\n        const controlsFontSize = fontSize / 3;\n        context.font = `bold ${controlsFontSize}px ${this.gameFont}`;\n        const controls = \"Left: A, Right: D, Shoot: Space\";\n        textWidth = context.measureText(controls).width;\n        context.fillText(controls, x - (textWidth / 2), y + controlsFontSize);\n    }\n\n    draw() {\n        const context = this.gameCanvas.getContext('2d');\n        // Clear the canvas\n        context.fillStyle = '#000';\n        context.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);\n        if (this.state !== 'Playing') {\n            context.globalAlpha = 0.3;\n        } else {\n            context.globalAlpha = 1;\n        }\n        \n        this.ship.draw();\n        \n        if (this.enemies) {\n            this.enemies.forEach(enemy => {\n                enemy.draw();\n            });\n        }\n        if (this.projectiles) {\n            this.projectiles.forEach(projectile => {\n                projectile.draw();\n            });\n        }\n\n        if (this.explosion) {\n            this.explosion.draw();\n        }\n\n        context.globalAlpha = 1;\n\n        if (this.state === 'Next Level') {\n            const middleOfCanvas = this.gameCanvas.width / 2;\n            const fontSize = 40;\n            this.drawLevel(middleOfCanvas, this.gameCanvas.height / 2, this.level, fontSize);\n            this.drawInstructions(middleOfCanvas, this.gameCanvas.height / 2 + (fontSize), (fontSize / 3));\n        } else if (this.state === 'Game Over') {\n            const middleOfCanvas = this.gameCanvas.width / 2;\n            const fontSize = 40;\n            this.drawGameOver(middleOfCanvas, this.gameCanvas.height / 2, \"Game Over\", fontSize);\n            this.drawInstructions(middleOfCanvas, this.gameCanvas.height / 2 + (fontSize), (fontSize / 3));\n        } else if (this.state === 'New Game') {\n            const middleOfCanvas = this.gameCanvas.width / 2;\n            const fontSize = 40;\n            this.drawNewGame(middleOfCanvas, this.gameCanvas.height / 2, fontSize);\n        } else if (this.state === 'Won') {\n            const middleOfCanvas = this.gameCanvas.width / 2;\n            const fontSize = 30;\n            this.drawWonScreen(middleOfCanvas, this.gameCanvas.height / 2, fontSize);\n        }\n    };\n\n    isGameOver() {\n        return (this.lives < 1);\n    }\n\n    fire() {\n        const x = this.ship.x + ((this.ship.width / 2) - (this.projectileWidth / 2));\n        const y = this.ship.y;\n        if (this.ship.canFire() && this.state === 'Playing') {\n            const projectile = new _projectile__WEBPACK_IMPORTED_MODULE_3__.default(this.gameCanvas, x, y, this.projectileWidth, this.projectileHeight, -3);\n            this.projectiles.push(projectile);\n            this.ship.fire();\n        }\n    }\n\n    update() {\n        this.tickCount += 0.01;\n        const gameScore = document.querySelector('.game-score');\n        const gameLevel = document.querySelector('.game-level');\n\n        if (this.isGameOver() && this.state !== 'Game Over') {\n            this.state = 'Game Over';\n            this.dead = true;\n            this.lives = 0;\n        }\n        if (this.state === 'Playing') {\n            // Update positions\n            this.updateEnemies();\n            this.updatePlayer();\n            this.updateProjectiles();\n            if (this.explosion !== null) {\n                this.explosion.update();\n                if (this.explosion.lifeTime <= 0) {\n                    this.explosion.remove();\n                    this.explosion = null;\n                }\n            }\n            // Check for collisions\n            this.collisionCheck();\n\n            // Update score\n            gameScore.innerText = `Score: ${this.score}`;\n            // Update level\n            gameLevel.innerText = `Level: ${this.level}`;\n        }\n\n        if ((this.state !== 'Playing') && ((this.mouseDown) \n        || this.keys['space']\n        || this.keys['left']\n        || this.keys['right'])) {\n            if (this.state !== 'New Game') { this.newGame(); }\n            this.state = 'Playing';\n        }\n\n        this.draw();\n    }\n\n    updateEnemies() {\n        if (this.tickCount > this.delta) {\n            this.tickCount = 0;\n            this.enemies.forEach(enemy => {\n                enemy.moveDown();\n            });\n        }\n\n        if (this.enemies) {\n            this.enemies.forEach(enemy => {\n                enemy.update();\n            });\n        }\n    }\n\n    updatePlayer() {\n        if (this.keys['left']) {\n            this.ship.moveLeft();\n        } else if (this.keys['right']) {\n            this.ship.moveRight();\n        }\n        if (this.keys['space']) {\n            this.fire()\n        }\n    }\n\n    updateProjectiles() {\n        if (this.projectiles) {\n            this.projectiles.forEach(projectile => {\n                projectile.update();\n                if (projectile.getY() < 0) {\n                    this.projectiles.splice(this.projectiles.indexOf(projectile), 1);\n                }\n            });\n        }\n    }\n\n    collisionCheck() {\n        let newState = 'Playing';\n        // Enemy & bullet\n        this.enemies.forEach(enemy => {\n            if (enemy.y >= this.gameCanvas.height - enemy.height) {\n                this.lives -= 1;\n            }\n            this.projectiles.forEach(projectile => {\n                if (enemy.isCollisionDetected(projectile.getX(), projectile.getY(), projectile.width, projectile.height)) {\n                    // Play sound\n                    this.sound.position\n                    this.sound.play();\n\n                    // Create new explosion\n                    this.explosion = new _explosion__WEBPACK_IMPORTED_MODULE_2__.default(this.gameCanvas, projectile.getX(), projectile.getY());\n                    this.enemies.splice(this.enemies.indexOf(enemy), 1);\n                    this.projectiles.splice(this.projectiles.indexOf(projectile), 1);\n                    this.score += 10;\n                    if (this.enemies.length === 0) {\n                        this.level += 1;\n                        newState = 'Next Level';\n                        if (this.level > this.maxLevel) {\n                            this.level = this.maxLevel;\n                            newState = 'Won';\n                        }\n                    }\n                }\n            });\n        });\n\n        // Ship & enemy\n        this.enemies.forEach(enemy => {\n            if (enemy.isCollisionDetected(this.ship.x, this.ship.y, this.ship.width, this.ship.height)) {\n                this.lives -= 1;\n            }\n        });\n        this.state = newState;\n    }\n}\n\n//# sourceURL=webpack://spaceinvaders/./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n// require('../css/styles.css');\n\n\n\n// Elements\nconst gameContainer = document.querySelector('.game-container');\nconst gameScore = document.querySelector('.game-score');\nconst gameLives = document.querySelector('.game-lives');\nconst gameElement = document.querySelector('.game');\nconst gameCanvas = document.querySelector('.game-canvas');\nconst buttonShootContainer = document.querySelector('.button-shoot-container');\nconst controlsContainer = document.querySelector('.controls-container');\n\n//const game = new Game(gameCanvas);\n\nvar PIXEL_RATIO = (function () {\n    var ctx = document.createElement(\"canvas\").getContext(\"2d\"),\n        dpr = window.devicePixelRatio || 1,\n        bsr = ctx.webkitBackingStorePixelRatio ||\n            ctx.mozBackingStorePixelRatio ||\n            ctx.msBackingStorePixelRatio ||\n            ctx.oBackingStorePixelRatio ||\n            ctx.backingStorePixelRatio || 1;\n\n    return dpr / bsr;\n})();\n\n\nconst convertHiDPICanvas = function (canvas, w, h, ratio) {\n    if (!ratio) { ratio = PIXEL_RATIO; }\n    canvas.width = w * ratio;\n    canvas.height = h * ratio;\n    canvas.style.width = w + \"px\";\n    canvas.style.height = h + \"px\";\n    canvas.getContext(\"2d\").setTransform(ratio, 0, 0, ratio, 0, 0);\n    return canvas;\n}\n\n//Create canvas with the device resolution.\n//convertHiDPICanvas(gameCanvas, window.innerWidth * 0.5, window.innerHeight * 0.5);\n\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(gameCanvas);\n\ncontrolsContainer.style.visibility = \"hidden\";\n\nwindow.addEventListener('touchstart', () => {\n    controlsContainer.style.visibility = \"visible\";\n    window.removeEventListener('touchstart');\n}, false);\n\nsetTimeout(function() {\n    game.draw();\n}, 1000);\n\n// Game loop\nsetInterval(game.update, 40);\n\n//# sourceURL=webpack://spaceinvaders/./src/js/index.js?");

/***/ }),

/***/ "./src/js/particle.js":
/*!****************************!*\
  !*** ./src/js/particle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Particle)\n/* harmony export */ });\nclass Particle {\n  constructor(canvasElement, x, y, direction, speed = 5, radius = 1) {\n    this.canvas = canvasElement;\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.speed = speed;\n    this.direction = direction;\n    this.colour = \"#ed3c43\";\n  }\n\n  update() {\n    const gravity = 2;\n    this.x += this.direction.x * this.speed;\n    if (this.direction.y == -1) {\n      this.y += (this.direction.y * this.speed) + gravity;\n    } else {\n      this.y += this.direction.y * this.speed;\n    }\n  }\n\n  draw() {\n    const context = this.canvas.getContext(\"2d\");\n    context.beginPath();\n    context.fillStyle = this.colour;\n    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\n    context.closePath();\n    context.fill();\n  }\n}\n\n\n//# sourceURL=webpack://spaceinvaders/./src/js/particle.js?");

/***/ }),

/***/ "./src/js/projectile.js":
/*!******************************!*\
  !*** ./src/js/projectile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projectile)\n/* harmony export */ });\nclass Projectile {\n    constructor(canvasElement, x = 0, y = 0, width = 1, height = 1, speed = 1) {\n        this.canvasElement = canvasElement;\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.speed = speed;\n    }\n\n    draw() {\n        const context = this.canvasElement.getContext('2d');\n        context.fillStyle = '#FF0000';\n        context.fillRect(this.x, this.y, this.width, this.height);\n    }\n\n    update() {\n        this.y += this.speed;\n    }\n\n    move() {\n        this.y -= this.speed;\n    }\n\n    getX() {\n        return this.x;\n    }\n\n    getY() {\n        return this.y;\n    }\n}\n\n//# sourceURL=webpack://spaceinvaders/./src/js/projectile.js?");

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\n/* harmony import */ var _src_images_ship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/images/ship.png */ \"./src/images/ship.png\");\n\n\nclass Ship {\n    \n    constructor(canvasElement) {\n        this.gameCanvas = canvasElement;\n        this.image = new Image();\n        this.image.src = _src_images_ship_png__WEBPACK_IMPORTED_MODULE_0__.default;\n        this.height = 10;\n        this.width = 30;\n        this.x = (this.gameCanvas.width / 2) - (this.width / 2)\n        this.y = (this.gameCanvas.height - this.height);\n        this.speed = 5;\n        this.canShoot = true;\n\n        this.fire();\n    }\n    \n    draw() {\n        const context = this.gameCanvas.getContext('2d');\n\n        if (this.image) {\n            context.drawImage(this.image, this.x, this.y, this.width, this.height);\n        }\n    }\n\n    moveLeft() {\n        this.x -= this.speed;\n        if (this.x < 0) { this.x = 0; }\n    }\n\n    moveRight() {\n        this.x += this.speed;\n        if (this.x + this.width > this.gameCanvas.width) {\n            this.x = this.gameCanvas.width - this.width;\n        }\n    }\n\n    fire() {\n        this.canShoot = false;\n        var me = this;\n        setTimeout(function() { me.canShoot = true; }, 500);   \n    }\n\n    canFire() {\n        return this.canShoot;\n    }\n}\n\n\n//# sourceURL=webpack://spaceinvaders/./src/js/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
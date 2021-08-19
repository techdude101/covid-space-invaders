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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enemy)\n/* harmony export */ });\n/* harmony import */ var _src_images_coronavirus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/images/coronavirus.png */ \"./src/images/coronavirus.png\");\n\r\n\r\nclass Enemy {\r\n\r\n    constructor(canvasElement, x, y, width = 20, height = 20) {\r\n        this.gameCanvas = canvasElement;\r\n        this.image = new Image();\r\n        this.image.src = _src_images_coronavirus_png__WEBPACK_IMPORTED_MODULE_0__.default;\r\n        this.height = height;\r\n        this.width = width;\r\n        this.direction = 'left';\r\n        this.speed = 0.2;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.canFire = true;\r\n    }\r\n\r\n    update() {\r\n\r\n    }\r\n\r\n    draw() {\r\n        const context = this.gameCanvas.getContext('2d');\r\n\r\n        if (this.image) {\r\n            context.drawImage(this.image, this.x, this.y, this.width, this.height);\r\n        }\r\n    }\r\n\r\n    moveLeft() {\r\n        this.x -= this.speed;\r\n    }\r\n\r\n    moveRight() {\r\n        this.x += this.speed;\r\n    }\r\n\r\n    moveDown() {\r\n        this.y += this.speed;\r\n    }\r\n\r\n    getBoundingRect() {\r\n        return this.image.getBoundingClientRect();\r\n    }\r\n\r\n    isCollisionDetected(x, y, width, height) {\r\n        // Horizontal\r\n        if ((x <= (this.x + this.width) && x >= this.x)\r\n        || (this.x <= (x + width) && this.x >= x)) {\r\n            // Vertical\r\n            if ((y < (this.y + this.height) && y >= this.y)\r\n            || (this.y < (y + this.height) && this.y >= y)) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}\n\n//# sourceURL=webpack://spaceinvaders/./src/js/enemy.js?");

/***/ }),

/***/ "./src/js/explosion.js":
/*!*****************************!*\
  !*** ./src/js/explosion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Explosion)\n/* harmony export */ });\n/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ \"./src/js/particle.js\");\n\r\n\r\nclass Explosion {\r\n  constructor(canvasElement, x, y) {\r\n    let particles = [];\r\n\r\n    // Create some particles\r\n    for (let i = 0; i < 10; i++) {\r\n      let speed = Math.random() * 5;\r\n      let xDirection = Math.random();\r\n      let yDirection = Math.random();\r\n      particles.push(\r\n        new _particle__WEBPACK_IMPORTED_MODULE_0__.default(\r\n          canvasElement, \r\n          x,\r\n          y,\r\n          { x: xDirection, y: yDirection },\r\n          speed\r\n        )\r\n      );\r\n      particles.push(\r\n        new _particle__WEBPACK_IMPORTED_MODULE_0__.default(\r\n          canvasElement, \r\n          x,\r\n          y,\r\n          { x: xDirection, y: -yDirection },\r\n          speed\r\n        )\r\n      );\r\n      particles.push(\r\n        new _particle__WEBPACK_IMPORTED_MODULE_0__.default(\r\n          canvasElement, \r\n          x,\r\n          y,\r\n          { x: -xDirection, y: yDirection },\r\n          speed\r\n        )\r\n      );\r\n      particles.push(\r\n        new _particle__WEBPACK_IMPORTED_MODULE_0__.default(\r\n          canvasElement, \r\n          x,\r\n          y,\r\n          { x: -xDirection, y: -yDirection },\r\n          speed\r\n        )\r\n      );\r\n    }\r\n\r\n    this.particles = particles;\r\n    this.lifeTime = 10;\r\n  } // End constructor\r\n  \r\n  update() {\r\n      this.particles.forEach((particle) => {\r\n        particle.update();\r\n      })\r\n      if (this.lifeTime > 0) {\r\n          this.lifeTime -= 1;\r\n      }\r\n  }\r\n\r\n  draw() {\r\n    this.particles.forEach((particle) => {\r\n        particle.draw();  \r\n      })\r\n  }\r\n\r\n  remove() {\r\n    this.particles = [];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://spaceinvaders/./src/js/explosion.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/js/ship.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/js/enemy.js\");\n/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explosion */ \"./src/js/explosion.js\");\n/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectile */ \"./src/js/projectile.js\");\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(gameCanvas, score = 0, lives = 1, speed = 200) {\r\n        this.keys = {\r\n            left: false,\r\n            right: false,\r\n            space: false,\r\n        };\r\n\r\n        this.mouseDown = false;\r\n\r\n        this.projectiles = [];\r\n        this.enemies = [];\r\n        this.projectileWidth = 2;\r\n        this.projectileHeight = 4;\r\n        this.maxLevel = 20;\r\n        this.level = 10;\r\n        this.score = score;\r\n        this.lives = lives;\r\n        this.speed = speed;\r\n        this.delta = 1 / speed;\r\n        this.gameCanvas = gameCanvas;\r\n        this.state = 'New Game';\r\n        this.dead = false;\r\n        this.gameFont = \"monospace\";\r\n\r\n        this.tickCount = 0;\r\n        this.explosion = null;\r\n\r\n        this.newGame();\r\n\r\n        this.update = this.update.bind(this);\r\n\r\n        // Event listeners\r\n        this.keyDownHandlerBind = this.keyDownHandlerBind.bind(this);\r\n        this.keyUpHandlerBind = this.keyUpHandlerBind.bind(this);\r\n        this.mouseHandlerBind = this.mouseHandlerBind.bind(this);\r\n        this.touchHandlerBind = this.touchHandlerBind.bind(this);\r\n        this.controlsHandlerBind = this.controlsHandlerBind.bind(this);\r\n\r\n        document.addEventListener('keydown', this.keyDownHandlerBind);\r\n        document.addEventListener('keyup', this.keyUpHandlerBind);\r\n        document.addEventListener('mousedown', this.mouseHandlerBind);\r\n        document.addEventListener('mouseup', this.mouseHandlerBind);\r\n        \r\n        const buttons = document.querySelectorAll('.controls-container button');\r\n        buttons.forEach(button => {\r\n            button.addEventListener('click', this.controlsHandlerBind);\r\n            button.addEventListener('touchend', this.touchHandlerBind);\r\n            button.addEventListener('touchstart', this.touchHandlerBind);\r\n            button.addEventListener('touchcancel', this.touchHandlerBind);\r\n            button.addEventListener('touchmove', this.touchHandlerBind);\r\n        });\r\n    }\r\n\r\n    newGame() {\r\n        this.explosion = null;\r\n        this.keys = {\r\n            left: false,\r\n            right: false,\r\n            space: false,\r\n        };\r\n\r\n        this.mouseDown = false;\r\n\r\n        this.projectiles = [];\r\n        this.enemies = [];\r\n        if (this.state === 'Won') {\r\n            this.dead = true;\r\n        }\r\n        if (this.dead) {\r\n            this.score = 0;\r\n            this.level = 1;\r\n            this.dead = false;\r\n            this.lives = 1;\r\n        }\r\n\r\n        this.tickCount = 0;\r\n\r\n        // Create game objects\r\n        if (!this.ship) {\r\n            this.ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.default(this.gameCanvas);\r\n        }\r\n\r\n        let enemySize = 20 - this.level;\r\n        if (this.level > 10) {\r\n            enemySize = 10;\r\n        }\r\n        const enemyMinX = this.ship.width;\r\n        const enemyMaxX = Math.floor(this.gameCanvas.width - (this.ship.width / 2));\r\n\r\n        for (let i = 0; i < 2; i++) {\r\n            this.spawnEnemy('left', enemyMinX, enemyMaxX, enemySize, enemySize);    \r\n            this.spawnEnemy('right', enemyMinX, enemyMaxX, enemySize, enemySize);\r\n            this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);\r\n            this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);\r\n        }\r\n        this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);\r\n        this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);\r\n        if (this.level > 10) {\r\n            for (let i = 0; i < (this.level % 10) * 2; i++) {\r\n                this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);\r\n                this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);\r\n            }\r\n        }\r\n\r\n        this.drawNewGame(this.gameCanvas.width / 2, this.gameCanvas.height / 2, 40);\r\n    }\r\n\r\n    spawnEnemy(position = 'top', minX, maxX, width = 20, height = 20) {\r\n        let x = Math.floor(Math.random() * this.gameCanvas.width - 50);\r\n        let y = Math.floor(Math.random() * (this.gameCanvas.height / 2));\r\n\r\n        switch (position) {\r\n            case 'top':\r\n                x = Math.floor(Math.random() * this.gameCanvas.width - 50);\r\n                y = 5;\r\n                break;\r\n            case 'left':\r\n                x = Math.floor(Math.random() * (this.gameCanvas.width / 3));\r\n                break;\r\n            case 'right':\r\n                x = this.gameCanvas.width - Math.floor(Math.random() * (this.gameCanvas.width / 3));\r\n                x -= width;\r\n                if (x > maxX) { x = maxX; }\r\n                break;\r\n            case 'middle':\r\n                const thirdOfCanvas = this.gameCanvas.width / 3;\r\n                x = Math.floor(Math.random() * thirdOfCanvas) + thirdOfCanvas;\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n        \r\n        if (x <= minX) { x = minX; }\r\n        if (y < 0) { y = 0; }\r\n\r\n        this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_1__.default(this.gameCanvas, x, y, width, height));\r\n    }\r\n\r\n    controlsHandlerBind(e) {\r\n        if (e.target.id === 'control-left') {\r\n            this.ship.moveLeft();\r\n        } else if (e.target.id === 'control-right') {\r\n            this.ship.moveRight();\r\n        } else if (e.target.id === 'control-shoot') {\r\n            this.fire();\r\n        }\r\n    }\r\n    \r\n    touchHandlerBind(e) {\r\n        e.preventDefault();\r\n        if (e.type === \"touchstart\") {\r\n            if (e.target.id === 'control-left') {\r\n                this.keys['left'] = true;\r\n            } else if (e.target.id === 'control-right') {\r\n                this.keys['right'] = true;\r\n            } else if (e.target.id === 'control-shoot') {\r\n                this.keys['space'] = true;\r\n            }\r\n        } else if (e.type === \"touchend\") {\r\n            if (e.target.id === 'control-left') {\r\n                this.keys['left'] = false;\r\n            } else if (e.target.id === 'control-right') {\r\n                this.keys['right'] = false;\r\n            } else if (e.target.id === 'control-shoot') {\r\n                this.keys['space'] = false;\r\n            }\r\n        }\r\n    }\r\n\r\n    mouseHandlerBind(e) {\r\n        if (e.buttons > 0) {\r\n            this.mouseDown = true;\r\n        } else {\r\n            this.mouseDown = false;\r\n        }\r\n    }\r\n\r\n    keyDownHandlerBind(e) {\r\n        if (e.key === 'a') { this.keys['left'] = true; }\r\n        if (e.key === 'ArrowLeft') {\r\n            this.keys['left'] = true;\r\n        }\r\n\r\n        if (e.key === 'd') { this.keys['right'] = true; }\r\n        if (e.key === 'ArrowRight') {\r\n            this.keys['right'] = true;\r\n        }\r\n\r\n        if (e.key === ' ') {\r\n            this.keys['space'] = true;\r\n        }\r\n    }\r\n\r\n    keyUpHandlerBind(e) {\r\n        if (e.key === 'a') { this.keys['left'] = false; }\r\n        if (e.key === 'ArrowLeft') {\r\n            this.keys['left'] = false;\r\n        }\r\n\r\n        if (e.key === 'd') { this.keys['right'] = false; }\r\n        if (e.key === 'ArrowRight') {\r\n            this.keys['right'] = false;\r\n        }\r\n\r\n        if (e.key === ' ') {\r\n            this.keys['space'] = false;\r\n        }\r\n    }\r\n\r\n    drawWonScreen(x, y, fontSize) {\r\n        const context = this.gameCanvas.getContext('2d');\r\n        context.fillStyle = '#FFF';\r\n        context.font = `${fontSize}px ${this.gameFont}`;\r\n        const text = \"You beat COVID!\";\r\n        let textWidth = context.measureText(text).width;\r\n\r\n        context.fillText(text, x - (textWidth / 2), y - (fontSize / 2));\r\n\r\n        const controlsFontSize = fontSize / 3;\r\n        context.font = `bold ${controlsFontSize}px ${this.gameFont}`;\r\n        const controls = \"Press shoot to play again\";\r\n        textWidth = context.measureText(controls).width;\r\n        context.fillText(controls, x - (textWidth / 2), y + controlsFontSize);\r\n        return;\r\n    }\r\n\r\n    drawGameOver(x, y, text, fontSize) {\r\n        const context = this.gameCanvas.getContext('2d');\r\n        context.fillStyle = '#FFF';\r\n        context.font = `${fontSize}px ${this.gameFont}`;\r\n\r\n        const textWidth = context.measureText(text).width;\r\n\r\n        context.fillText(text, x - (textWidth / 2), y);\r\n    }\r\n\r\n    drawInstructions(x, y, fontSize) {\r\n        const context = this.gameCanvas.getContext('2d');\r\n        context.fillStyle = '#FFF';\r\n        context.font = `${fontSize}px ${this.gameFont}`;\r\n        const text = `Press shoot to continue`;\r\n        const textWidth = context.measureText(text).width;\r\n\r\n        context.fillText(text, x - (textWidth / 2), y + (fontSize / 2));\r\n    }\r\n\r\n    drawLevel(x, y, level, fontSize) {\r\n        const context = this.gameCanvas.getContext('2d');\r\n        context.fillStyle = '#FFF';\r\n        context.font = `${fontSize}px ${this.gameFont}`;\r\n        const text = `Level: ${level}`;\r\n        const textWidth = context.measureText(text).width;\r\n\r\n        context.fillText(text, x - (textWidth / 2), y);\r\n    }\r\n\r\n    drawNewGame(x, y, fontSize) {\r\n        const context = this.gameCanvas.getContext('2d');\r\n        context.fillStyle = '#FFF';\r\n        context.font = `${fontSize}px ${this.gameFont}`;\r\n        const text = \"New Game\";\r\n        let textWidth = context.measureText(text).width;\r\n\r\n        context.fillText(text, x - (textWidth / 2), y - (fontSize / 2));\r\n\r\n        const controlsFontSize = fontSize / 3;\r\n        context.font = `bold ${controlsFontSize}px ${this.gameFont}`;\r\n        const controls = \"Left: A, Right: D, Shoot: Space\";\r\n        textWidth = context.measureText(controls).width;\r\n        context.fillText(controls, x - (textWidth / 2), y + controlsFontSize);\r\n    }\r\n\r\n    draw() {\r\n        const context = this.gameCanvas.getContext('2d');\r\n        // Clear the canvas\r\n        context.fillStyle = '#000';\r\n        context.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);\r\n        if (this.state !== 'Playing') {\r\n            context.globalAlpha = 0.3;\r\n        } else {\r\n            context.globalAlpha = 1;\r\n        }\r\n        \r\n        this.ship.draw();\r\n        \r\n        if (this.enemies) {\r\n            this.enemies.forEach(enemy => {\r\n                enemy.draw();\r\n            });\r\n        }\r\n        if (this.projectiles) {\r\n            this.projectiles.forEach(projectile => {\r\n                projectile.draw();\r\n            });\r\n        }\r\n\r\n        if (this.explosion) {\r\n            this.explosion.draw();\r\n        }\r\n\r\n        context.globalAlpha = 1;\r\n\r\n        if (this.state === 'Next Level') {\r\n            const middleOfCanvas = this.gameCanvas.width / 2;\r\n            const fontSize = 40;\r\n            this.drawLevel(middleOfCanvas, this.gameCanvas.height / 2, this.level, fontSize);\r\n            this.drawInstructions(middleOfCanvas, this.gameCanvas.height / 2 + (fontSize), (fontSize / 3));\r\n        } else if (this.state === 'Game Over') {\r\n            const middleOfCanvas = this.gameCanvas.width / 2;\r\n            const fontSize = 40;\r\n            this.drawGameOver(middleOfCanvas, this.gameCanvas.height / 2, \"Game Over\", fontSize);\r\n            this.drawInstructions(middleOfCanvas, this.gameCanvas.height / 2 + (fontSize), (fontSize / 3));\r\n        } else if (this.state === 'New Game') {\r\n            const middleOfCanvas = this.gameCanvas.width / 2;\r\n            const fontSize = 40;\r\n            this.drawNewGame(middleOfCanvas, this.gameCanvas.height / 2, fontSize);\r\n        } else if (this.state === 'Won') {\r\n            const middleOfCanvas = this.gameCanvas.width / 2;\r\n            const fontSize = 30;\r\n            this.drawWonScreen(middleOfCanvas, this.gameCanvas.height / 2, fontSize);\r\n        }\r\n    };\r\n\r\n    isGameOver() {\r\n        return (this.lives < 1);\r\n    }\r\n\r\n    fire() {\r\n        const x = this.ship.x + ((this.ship.width / 2) - (this.projectileWidth / 2));\r\n        const y = this.ship.y;\r\n        if (this.ship.canFire() && this.state === 'Playing') {\r\n            const projectile = new _projectile__WEBPACK_IMPORTED_MODULE_3__.default(this.gameCanvas, x, y, this.projectileWidth, this.projectileHeight, -3);\r\n            this.projectiles.push(projectile);\r\n            this.ship.fire();\r\n        }\r\n    }\r\n\r\n    update() {\r\n        this.tickCount += 0.01;\r\n        const gameScore = document.querySelector('.game-score');\r\n        const gameLevel = document.querySelector('.game-level');\r\n\r\n        if (this.isGameOver() && this.state !== 'Game Over') {\r\n            this.state = 'Game Over';\r\n            this.dead = true;\r\n            this.lives = 0;\r\n        }\r\n        if (this.state === 'Playing') {\r\n            // Update positions\r\n            this.updateEnemies();\r\n            this.updatePlayer();\r\n            this.updateProjectiles();\r\n            if (this.explosion !== null) {\r\n                this.explosion.update();\r\n                if (this.explosion.lifeTime <= 0) {\r\n                    this.explosion.remove();\r\n                    this.explosion = null;\r\n                }\r\n            }\r\n            // Check for collisions\r\n            this.collisionCheck();\r\n\r\n            // Update score\r\n            gameScore.innerText = `Score: ${this.score}`;\r\n            // Update level\r\n            gameLevel.innerText = `Level: ${this.level}`;\r\n        }\r\n\r\n        if ((this.state !== 'Playing') && ((this.mouseDown) \r\n        || this.keys['space']\r\n        || this.keys['left']\r\n        || this.keys['right'])) {\r\n            if (this.state !== 'New Game') { this.newGame(); }\r\n            this.state = 'Playing';\r\n        }\r\n\r\n        this.draw();\r\n    }\r\n\r\n    updateEnemies() {\r\n        if (this.tickCount > this.delta) {\r\n            this.tickCount = 0;\r\n            this.enemies.forEach(enemy => {\r\n                enemy.moveDown();\r\n            });\r\n        }\r\n\r\n        if (this.enemies) {\r\n            this.enemies.forEach(enemy => {\r\n                enemy.update();\r\n            });\r\n        }\r\n    }\r\n\r\n    updatePlayer() {\r\n        if (this.keys['left']) {\r\n            this.ship.moveLeft();\r\n        } else if (this.keys['right']) {\r\n            this.ship.moveRight();\r\n        }\r\n        if (this.keys['space']) {\r\n            this.fire()\r\n        }\r\n    }\r\n\r\n    updateProjectiles() {\r\n        if (this.projectiles) {\r\n            this.projectiles.forEach(projectile => {\r\n                projectile.update();\r\n                if (projectile.getY() < 0) {\r\n                    this.projectiles.splice(this.projectiles.indexOf(projectile), 1);\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    collisionCheck() {\r\n        let newState = 'Playing';\r\n        // Enemy & bullet\r\n        this.enemies.forEach(enemy => {\r\n            if (enemy.y >= this.gameCanvas.height - enemy.height) {\r\n                this.lives -= 1;\r\n            }\r\n            this.projectiles.forEach(projectile => {\r\n                if (enemy.isCollisionDetected(projectile.getX(), projectile.getY(), projectile.width, projectile.height)) {\r\n                    // Create new explosion\r\n                    this.explosion = new _explosion__WEBPACK_IMPORTED_MODULE_2__.default(this.gameCanvas, projectile.getX(), projectile.getY());\r\n                    this.enemies.splice(this.enemies.indexOf(enemy), 1);\r\n                    this.projectiles.splice(this.projectiles.indexOf(projectile), 1);\r\n                    this.score += 10;\r\n                    if (this.enemies.length === 0) {\r\n                        this.level += 1;\r\n                        newState = 'Next Level';\r\n                        if (this.level > this.maxLevel) {\r\n                            this.level = this.maxLevel;\r\n                            newState = 'Won';\r\n                        }\r\n                    }\r\n                }\r\n            });\r\n        });\r\n\r\n        // Ship & enemy\r\n        this.enemies.forEach(enemy => {\r\n            if (enemy.isCollisionDetected(this.ship.x, this.ship.y, this.ship.width, this.ship.height)) {\r\n                this.lives -= 1;\r\n            }\r\n        });\r\n        this.state = newState;\r\n    }\r\n}\n\n//# sourceURL=webpack://spaceinvaders/./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n// require('../css/styles.css');\r\n\r\n\r\n\r\n// Elements\r\nconst gameContainer = document.querySelector('.game-container');\r\nconst gameScore = document.querySelector('.game-score');\r\nconst gameLives = document.querySelector('.game-lives');\r\nconst gameElement = document.querySelector('.game');\r\nconst gameCanvas = document.querySelector('.game-canvas');\r\nconst buttonShootContainer = document.querySelector('.button-shoot-container');\r\nconst controlsContainer = document.querySelector('.controls-container');\r\n\r\n//const game = new Game(gameCanvas);\r\n\r\nvar PIXEL_RATIO = (function () {\r\n    var ctx = document.createElement(\"canvas\").getContext(\"2d\"),\r\n        dpr = window.devicePixelRatio || 1,\r\n        bsr = ctx.webkitBackingStorePixelRatio ||\r\n            ctx.mozBackingStorePixelRatio ||\r\n            ctx.msBackingStorePixelRatio ||\r\n            ctx.oBackingStorePixelRatio ||\r\n            ctx.backingStorePixelRatio || 1;\r\n\r\n    return dpr / bsr;\r\n})();\r\n\r\n\r\nconst convertHiDPICanvas = function (canvas, w, h, ratio) {\r\n    if (!ratio) { ratio = PIXEL_RATIO; }\r\n    canvas.width = w * ratio;\r\n    canvas.height = h * ratio;\r\n    canvas.style.width = w + \"px\";\r\n    canvas.style.height = h + \"px\";\r\n    canvas.getContext(\"2d\").setTransform(ratio, 0, 0, ratio, 0, 0);\r\n    return canvas;\r\n}\r\n\r\n//Create canvas with the device resolution.\r\n//convertHiDPICanvas(gameCanvas, window.innerWidth * 0.5, window.innerHeight * 0.5);\r\n\r\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(gameCanvas);\r\n\r\ncontrolsContainer.style.visibility = \"hidden\";\r\n\r\nwindow.addEventListener('touchstart', () => {\r\n    controlsContainer.style.visibility = \"visible\";\r\n    window.removeEventListener('touchstart');\r\n}, false);\r\n\r\nsetTimeout(function() {\r\n    game.draw();\r\n}, 1000);\r\n\r\n// Game loop\r\nsetInterval(game.update, 40);\n\n//# sourceURL=webpack://spaceinvaders/./src/js/index.js?");

/***/ }),

/***/ "./src/js/particle.js":
/*!****************************!*\
  !*** ./src/js/particle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Particle)\n/* harmony export */ });\nclass Particle {\r\n  constructor(canvasElement, x, y, direction, speed = 5, radius = 1) {\r\n    this.canvas = canvasElement;\r\n    this.x = x;\r\n    this.y = y;\r\n    this.radius = radius;\r\n    this.speed = speed;\r\n    this.direction = direction;\r\n    this.colour = \"#ed3c43\";\r\n  }\r\n\r\n  update() {\r\n    const gravity = 0.9;\r\n    this.x += this.direction.x * this.speed;\r\n    if (this.direction.y == -1) {\r\n      this.y += (this.direction.y * this.speed) + gravity;\r\n    } else {\r\n      this.y += this.direction.y * this.speed;\r\n    }\r\n  }\r\n\r\n  draw() {\r\n    const context = this.canvas.getContext(\"2d\");\r\n    context.beginPath();\r\n    context.fillStyle = this.colour;\r\n    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\r\n    context.closePath();\r\n    context.fill();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://spaceinvaders/./src/js/particle.js?");

/***/ }),

/***/ "./src/js/projectile.js":
/*!******************************!*\
  !*** ./src/js/projectile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projectile)\n/* harmony export */ });\nclass Projectile {\r\n    constructor(canvasElement, x = 0, y = 0, width = 1, height = 1, speed = 1) {\r\n        this.canvasElement = canvasElement;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.speed = speed;\r\n    }\r\n\r\n    draw() {\r\n        const context = this.canvasElement.getContext('2d');\r\n        context.fillStyle = '#FF0000';\r\n        context.fillRect(this.x, this.y, this.width, this.height);\r\n    }\r\n\r\n    update() {\r\n        this.y += this.speed;\r\n    }\r\n\r\n    move() {\r\n        this.y -= this.speed;\r\n    }\r\n\r\n    getX() {\r\n        return this.x;\r\n    }\r\n\r\n    getY() {\r\n        return this.y;\r\n    }\r\n}\n\n//# sourceURL=webpack://spaceinvaders/./src/js/projectile.js?");

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\n/* harmony import */ var _src_images_ship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/images/ship.png */ \"./src/images/ship.png\");\n\r\n\r\nclass Ship {\r\n    \r\n    constructor(canvasElement) {\r\n        this.gameCanvas = canvasElement;\r\n        this.image = new Image();\r\n        this.image.src = _src_images_ship_png__WEBPACK_IMPORTED_MODULE_0__.default;\r\n        this.height = 10;\r\n        this.width = 30;\r\n        this.x = (this.gameCanvas.width / 2) - (this.width / 2)\r\n        this.y = (this.gameCanvas.height - this.height);\r\n        this.speed = 5;\r\n        this.canShoot = true;\r\n\r\n        this.fire();\r\n    }\r\n    \r\n    draw() {\r\n        const context = this.gameCanvas.getContext('2d');\r\n\r\n        if (this.image) {\r\n            context.drawImage(this.image, this.x, this.y, this.width, this.height);\r\n        }\r\n    }\r\n\r\n    moveLeft() {\r\n        this.x -= this.speed;\r\n        if (this.x < 0) { this.x = 0; }\r\n    }\r\n\r\n    moveRight() {\r\n        this.x += this.speed;\r\n        if (this.x + this.width > this.gameCanvas.width) {\r\n            this.x = this.gameCanvas.width - this.width;\r\n        }\r\n    }\r\n\r\n    fire() {\r\n        this.canShoot = false;\r\n        var me = this;\r\n        setTimeout(function() { me.canShoot = true; }, 500);   \r\n    }\r\n\r\n    canFire() {\r\n        return this.canShoot;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://spaceinvaders/./src/js/ship.js?");

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
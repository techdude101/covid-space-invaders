import  Ship from './ship';
import Enemy from './enemy';
import Explosion from './explosion';
import Projectile from './projectile';

export class Game {
    constructor(gameCanvas, score = 0, lives = 1, speed = 200) {
        this.keys = {
            left: false,
            right: false,
            space: false,
        };

        this.mouseDown = false;

        this.projectiles = [];
        this.enemies = [];
        this.projectileWidth = 2;
        this.projectileHeight = 4;
        this.maxLevel = 20;
        this.level = 1;
        this.score = score;
        this.lives = lives;
        this.speed = speed;
        this.delta = 1 / speed;
        this.gameCanvas = gameCanvas;
        this.state = 'New Game';
        this.dead = false;
        this.gameFont = "monospace";

        this.tickCount = 0;
        this.explosion = null;

        this.newGame();

        this.update = this.update.bind(this);

        // Event listeners
        this.keyDownHandlerBind = this.keyDownHandlerBind.bind(this);
        this.keyUpHandlerBind = this.keyUpHandlerBind.bind(this);
        this.mouseHandlerBind = this.mouseHandlerBind.bind(this);
        this.touchHandlerBind = this.touchHandlerBind.bind(this);
        this.controlsHandlerBind = this.controlsHandlerBind.bind(this);

        document.addEventListener('keydown', this.keyDownHandlerBind);
        document.addEventListener('keyup', this.keyUpHandlerBind);
        document.addEventListener('mousedown', this.mouseHandlerBind);
        document.addEventListener('mouseup', this.mouseHandlerBind);
        
        const buttons = document.querySelectorAll('.controls-container button');
        buttons.forEach(button => {
            button.addEventListener('click', this.controlsHandlerBind);
            button.addEventListener('touchend', this.touchHandlerBind);
            button.addEventListener('touchstart', this.touchHandlerBind);
            button.addEventListener('touchcancel', this.touchHandlerBind);
            button.addEventListener('touchmove', this.touchHandlerBind);
        });
    }

    newGame() {
        this.explosion = null;
        this.keys = {
            left: false,
            right: false,
            space: false,
        };

        this.mouseDown = false;

        this.projectiles = [];
        this.enemies = [];
        if (this.state === 'Won') {
            this.dead = true;
        }
        if (this.dead) {
            this.score = 0;
            this.level = 1;
            this.dead = false;
            this.lives = 1;
        }

        this.tickCount = 0;

        // Create game objects
        if (!this.ship) {
            this.ship = new Ship(this.gameCanvas);
        }

        let enemySize = 20 - this.level;
        if (this.level > 10) {
            enemySize = 10;
        }
        const enemyMinX = this.ship.width;
        const enemyMaxX = Math.floor(this.gameCanvas.width - (this.ship.width / 2));

        for (let i = 0; i < 2; i++) {
            this.spawnEnemy('left', enemyMinX, enemyMaxX, enemySize, enemySize);    
            this.spawnEnemy('right', enemyMinX, enemyMaxX, enemySize, enemySize);
            this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);
            this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);
        }
        this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);
        this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);
        if (this.level > 10) {
            for (let i = 0; i < (this.level % 10) * 2; i++) {
                this.spawnEnemy('middle', enemyMinX, enemyMaxX, enemySize, enemySize);
                this.spawnEnemy('top', enemyMinX, enemyMaxX, enemySize, enemySize);
            }
        }

        this.drawNewGame(this.gameCanvas.width / 2, this.gameCanvas.height / 2, 40);
    }

    spawnEnemy(position = 'top', minX, maxX, width = 20, height = 20) {
        let x = Math.floor(Math.random() * this.gameCanvas.width - 50);
        let y = Math.floor(Math.random() * (this.gameCanvas.height / 2));

        switch (position) {
            case 'top':
                x = Math.floor(Math.random() * this.gameCanvas.width - 50);
                y = 5;
                break;
            case 'left':
                x = Math.floor(Math.random() * (this.gameCanvas.width / 3));
                break;
            case 'right':
                x = this.gameCanvas.width - Math.floor(Math.random() * (this.gameCanvas.width / 3));
                x -= width;
                if (x > maxX) { x = maxX; }
                break;
            case 'middle':
                const thirdOfCanvas = this.gameCanvas.width / 3;
                x = Math.floor(Math.random() * thirdOfCanvas) + thirdOfCanvas;
                break;
            default:
                break;
        }
        
        if (x <= minX) { x = minX; }
        if (y < 0) { y = 0; }

        this.enemies.push(new Enemy(this.gameCanvas, x, y, width, height));
    }

    controlsHandlerBind(e) {
        if (e.target.id === 'control-left') {
            this.ship.moveLeft();
        } else if (e.target.id === 'control-right') {
            this.ship.moveRight();
        } else if (e.target.id === 'control-shoot') {
            this.fire();
        }
    }
    
    touchHandlerBind(e) {
        e.preventDefault();
        if (e.type === "touchstart") {
            if (e.target.id === 'control-left') {
                this.keys['left'] = true;
            } else if (e.target.id === 'control-right') {
                this.keys['right'] = true;
            } else if (e.target.id === 'control-shoot') {
                this.keys['space'] = true;
            }
        } else if (e.type === "touchend") {
            if (e.target.id === 'control-left') {
                this.keys['left'] = false;
            } else if (e.target.id === 'control-right') {
                this.keys['right'] = false;
            } else if (e.target.id === 'control-shoot') {
                this.keys['space'] = false;
            }
        }
    }

    mouseHandlerBind(e) {
        if (e.buttons > 0) {
            this.mouseDown = true;
        } else {
            this.mouseDown = false;
        }
    }

    keyDownHandlerBind(e) {
        if (e.key === 'a') { this.keys['left'] = true; }
        if (e.key === 'ArrowLeft') {
            this.keys['left'] = true;
        }

        if (e.key === 'd') { this.keys['right'] = true; }
        if (e.key === 'ArrowRight') {
            this.keys['right'] = true;
        }

        if (e.key === ' ') {
            this.keys['space'] = true;
        }
    }

    keyUpHandlerBind(e) {
        if (e.key === 'a') { this.keys['left'] = false; }
        if (e.key === 'ArrowLeft') {
            this.keys['left'] = false;
        }

        if (e.key === 'd') { this.keys['right'] = false; }
        if (e.key === 'ArrowRight') {
            this.keys['right'] = false;
        }

        if (e.key === ' ') {
            this.keys['space'] = false;
        }
    }

    drawWonScreen(x, y, fontSize) {
        const context = this.gameCanvas.getContext('2d');
        context.fillStyle = '#FFF';
        context.font = `${fontSize}px ${this.gameFont}`;
        const text = "You beat COVID!";
        let textWidth = context.measureText(text).width;

        context.fillText(text, x - (textWidth / 2), y - (fontSize / 2));

        const controlsFontSize = fontSize / 3;
        context.font = `bold ${controlsFontSize}px ${this.gameFont}`;
        const controls = "Press shoot to play again";
        textWidth = context.measureText(controls).width;
        context.fillText(controls, x - (textWidth / 2), y + controlsFontSize);
        return;
    }

    drawGameOver(x, y, text, fontSize) {
        const context = this.gameCanvas.getContext('2d');
        context.fillStyle = '#FFF';
        context.font = `${fontSize}px ${this.gameFont}`;

        const textWidth = context.measureText(text).width;

        context.fillText(text, x - (textWidth / 2), y);
    }

    drawInstructions(x, y, fontSize) {
        const context = this.gameCanvas.getContext('2d');
        context.fillStyle = '#FFF';
        context.font = `${fontSize}px ${this.gameFont}`;
        const text = `Press shoot to continue`;
        const textWidth = context.measureText(text).width;

        context.fillText(text, x - (textWidth / 2), y + (fontSize / 2));
    }

    drawLevel(x, y, level, fontSize) {
        const context = this.gameCanvas.getContext('2d');
        context.fillStyle = '#FFF';
        context.font = `${fontSize}px ${this.gameFont}`;
        const text = `Level: ${level}`;
        const textWidth = context.measureText(text).width;

        context.fillText(text, x - (textWidth / 2), y);
    }

    drawNewGame(x, y, fontSize) {
        const context = this.gameCanvas.getContext('2d');
        context.fillStyle = '#FFF';
        context.font = `${fontSize}px ${this.gameFont}`;
        const text = "New Game";
        let textWidth = context.measureText(text).width;

        context.fillText(text, x - (textWidth / 2), y - (fontSize / 2));

        const controlsFontSize = fontSize / 3;
        context.font = `bold ${controlsFontSize}px ${this.gameFont}`;
        const controls = "Left: A, Right: D, Shoot: Space";
        textWidth = context.measureText(controls).width;
        context.fillText(controls, x - (textWidth / 2), y + controlsFontSize);
    }

    draw() {
        const context = this.gameCanvas.getContext('2d');
        // Clear the canvas
        context.fillStyle = '#000';
        context.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
        if (this.state !== 'Playing') {
            context.globalAlpha = 0.3;
        } else {
            context.globalAlpha = 1;
        }
        
        this.ship.draw();
        
        if (this.enemies) {
            this.enemies.forEach(enemy => {
                enemy.draw();
            });
        }
        if (this.projectiles) {
            this.projectiles.forEach(projectile => {
                projectile.draw();
            });
        }

        if (this.explosion) {
            this.explosion.draw();
        }

        context.globalAlpha = 1;

        if (this.state === 'Next Level') {
            const middleOfCanvas = this.gameCanvas.width / 2;
            const fontSize = 40;
            this.drawLevel(middleOfCanvas, this.gameCanvas.height / 2, this.level, fontSize);
            this.drawInstructions(middleOfCanvas, this.gameCanvas.height / 2 + (fontSize), (fontSize / 3));
        } else if (this.state === 'Game Over') {
            const middleOfCanvas = this.gameCanvas.width / 2;
            const fontSize = 40;
            this.drawGameOver(middleOfCanvas, this.gameCanvas.height / 2, "Game Over", fontSize);
            this.drawInstructions(middleOfCanvas, this.gameCanvas.height / 2 + (fontSize), (fontSize / 3));
        } else if (this.state === 'New Game') {
            const middleOfCanvas = this.gameCanvas.width / 2;
            const fontSize = 40;
            this.drawNewGame(middleOfCanvas, this.gameCanvas.height / 2, fontSize);
        } else if (this.state === 'Won') {
            const middleOfCanvas = this.gameCanvas.width / 2;
            const fontSize = 30;
            this.drawWonScreen(middleOfCanvas, this.gameCanvas.height / 2, fontSize);
        }
    };

    isGameOver() {
        return (this.lives < 1);
    }

    fire() {
        const x = this.ship.x + ((this.ship.width / 2) - (this.projectileWidth / 2));
        const y = this.ship.y;
        if (this.ship.canFire() && this.state === 'Playing') {
            const projectile = new Projectile(this.gameCanvas, x, y, this.projectileWidth, this.projectileHeight, -3);
            this.projectiles.push(projectile);
            this.ship.fire();
        }
    }

    update() {
        this.tickCount += 0.01;
        const gameScore = document.querySelector('.game-score');
        const gameLevel = document.querySelector('.game-level');

        if (this.isGameOver() && this.state !== 'Game Over') {
            this.state = 'Game Over';
            this.dead = true;
            this.lives = 0;
        }
        if (this.state === 'Playing') {
            // Update positions
            this.updateEnemies();
            this.updatePlayer();
            this.updateProjectiles();
            if (this.explosion !== null) {
                this.explosion.update();
                if (this.explosion.lifeTime <= 0) {
                    this.explosion.remove();
                    this.explosion = null;
                }
            }
            // Check for collisions
            this.collisionCheck();

            // Update score
            gameScore.innerText = `Score: ${this.score}`;
            // Update level
            gameLevel.innerText = `Level: ${this.level}`;
        }

        if ((this.state !== 'Playing') && ((this.mouseDown) 
        || this.keys['space']
        || this.keys['left']
        || this.keys['right'])) {
            if (this.state !== 'New Game') { this.newGame(); }
            this.state = 'Playing';
        }

        this.draw();
    }

    updateEnemies() {
        if (this.tickCount > this.delta) {
            this.tickCount = 0;
            this.enemies.forEach(enemy => {
                enemy.moveDown();
            });
        }

        if (this.enemies) {
            this.enemies.forEach(enemy => {
                enemy.update();
            });
        }
    }

    updatePlayer() {
        if (this.keys['left']) {
            this.ship.moveLeft();
        } else if (this.keys['right']) {
            this.ship.moveRight();
        }
        if (this.keys['space']) {
            this.fire()
        }
    }

    updateProjectiles() {
        if (this.projectiles) {
            this.projectiles.forEach(projectile => {
                projectile.update();
                if (projectile.getY() < 0) {
                    this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
                }
            });
        }
    }

    collisionCheck() {
        let newState = 'Playing';
        // Enemy & bullet
        this.enemies.forEach(enemy => {
            if (enemy.y >= this.gameCanvas.height - enemy.height) {
                this.lives -= 1;
            }
            this.projectiles.forEach(projectile => {
                if (enemy.isCollisionDetected(projectile.getX(), projectile.getY(), projectile.width, projectile.height)) {
                    // Create new explosion
                    this.explosion = new Explosion(this.gameCanvas, projectile.getX(), projectile.getY());
                    this.enemies.splice(this.enemies.indexOf(enemy), 1);
                    this.projectiles.splice(this.projectiles.indexOf(projectile), 1);
                    this.score += 10;
                    if (this.enemies.length === 0) {
                        this.level += 1;
                        newState = 'Next Level';
                        if (this.level > this.maxLevel) {
                            this.level = this.maxLevel;
                            newState = 'Won';
                        }
                    }
                }
            });
        });

        // Ship & enemy
        this.enemies.forEach(enemy => {
            if (enemy.isCollisionDetected(this.ship.x, this.ship.y, this.ship.width, this.ship.height)) {
                this.lives -= 1;
            }
        });
        this.state = newState;
    }
}
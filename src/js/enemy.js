import enemyImage from '/src/images/coronavirus.png';

export default class Enemy {

    constructor(canvasElement, x, y, width = 20, height = 20) {
        this.gameCanvas = canvasElement;
        this.image = new Image();
        this.image.src = enemyImage;
        this.height = height;
        this.width = width;
        this.direction = 'left';
        this.speed = 0.2;
        this.x = x;
        this.y = y;
        this.canFire = true;
    }

    update() {

    }

    draw() {
        const context = this.gameCanvas.getContext('2d');

        if (this.image) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    getBoundingRect() {
        return this.image.getBoundingClientRect();
    }

    isCollisionDetected(x, y, width, height) {
        // Horizontal
        if ((x <= (this.x + this.width) && x >= this.x)
        || (this.x <= (x + width) && this.x >= x)) {
            // Vertical
            if ((y < (this.y + this.height) && y >= this.y)
            || (this.y < (y + this.height) && this.y >= y)) {
                return true;
            }
        }
        return false;
    }
}
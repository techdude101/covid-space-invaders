export default class Projectile {
    constructor(canvasElement, x = 0, y = 0, width = 1, height = 1, speed = 1) {
        this.canvasElement = canvasElement;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    draw() {
        const context = this.canvasElement.getContext('2d');
        context.fillStyle = '#FF0000';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.y += this.speed;
    }

    move() {
        this.y -= this.speed;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}
import shipImage from '/src/images/ship.png';

export default class Ship {
    
    constructor(canvasElement) {
        this.gameCanvas = canvasElement;
        this.image = new Image();
        this.image.src = shipImage;
        this.height = 10;
        this.width = 30;
        this.x = (this.gameCanvas.width / 2) - (this.width / 2)
        this.y = (this.gameCanvas.height - this.height);
        this.speed = 5;
        this.canShoot = true;

        this.fire();
    }
    
    draw() {
        const context = this.gameCanvas.getContext('2d');

        if (this.image) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    moveLeft() {
        this.x -= this.speed;
        if (this.x < 0) { this.x = 0; }
    }

    moveRight() {
        this.x += this.speed;
        if (this.x + this.width > this.gameCanvas.width) {
            this.x = this.gameCanvas.width - this.width;
        }
    }

    fire() {
        this.canShoot = false;
        var me = this;
        setTimeout(function() { me.canShoot = true; }, 500);   
    }

    canFire() {
        return this.canShoot;
    }
}

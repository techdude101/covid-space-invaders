export default class Particle {
  constructor(canvasElement, x, y, direction, speed = 5, radius = 1) {
    this.canvas = canvasElement;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.direction = direction;
    this.colour = "#ed3c43";
  }

  update() {
    const gravity = 0.9;
    this.x += this.direction.x * this.speed;
    if (this.direction.y == -1) {
      this.y += (this.direction.y * this.speed) + gravity;
    } else {
      this.y += this.direction.y * this.speed;
    }
  }

  draw() {
    const context = this.canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = this.colour;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  }
}

import Particle from "./particle";

export default class Explosion {
  constructor(canvasElement, x, y) {
    let particles = [];

    // Create some particles
    for (let i = 0; i < 10; i++) {
      let speed = Math.random() * 5;
      let xDirection = Math.random();
      let yDirection = Math.random();
      particles.push(
        new Particle(
          canvasElement, 
          x,
          y,
          { x: xDirection, y: yDirection },
          speed
        )
      );
      particles.push(
        new Particle(
          canvasElement, 
          x,
          y,
          { x: xDirection, y: -yDirection },
          speed
        )
      );
      particles.push(
        new Particle(
          canvasElement, 
          x,
          y,
          { x: -xDirection, y: yDirection },
          speed
        )
      );
      particles.push(
        new Particle(
          canvasElement, 
          x,
          y,
          { x: -xDirection, y: -yDirection },
          speed
        )
      );
    }

    this.particles = particles;
    this.lifeTime = 10;
  } // End constructor
  
  update() {
      this.particles.forEach((particle) => {
        particle.update();
      })
      if (this.lifeTime > 0) {
          this.lifeTime -= 1;
      }
  }

  draw() {
    this.particles.forEach((particle) => {
        particle.draw();  
      })
  }

  remove() {
    this.particles = [];
  }
}

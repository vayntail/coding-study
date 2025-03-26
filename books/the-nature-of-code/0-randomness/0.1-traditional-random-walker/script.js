const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Walker {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
  setup() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
  }
  show() {
    ctx.lineTo(this.x + 1, this.y + 1);
    ctx.stroke();
  }
  step() {
    let xstep = Math.random() * (1 - -1) + -1; // gets any random decimal between -1 and 1.
    let ystep = Math.random() * (1 - -1) + -1;
    this.x += xstep;
    this.y += ystep;
  }
}

let walker;
function setup() {
  walker = new Walker();
  walker.setup();
}
function draw() {
  walker.step();
  walker.show();
  requestAnimationFrame(draw);
}

setup();
draw();

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
    let r = Math.random(1);
    if (r < 0.4) {
      this.x++; // 40% the walker will move to the right.
    } else if (r < 0.6) {
      this.x--; // 20% moves to left
    } else if (r < 0.8) {
      this.y++; // 20% moves to top
    } else {
      this.y--; // 20% moves to bottom
    }
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

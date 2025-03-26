/*
normal distribution: where numbers cluster around an average value
- also called a Gaussian distribution
- random values closer to the mean(average) should be more likely chosen while outlying heights should be rarer
- informally known as bell curve
- low standard deviation: majority of values pile up around the mean/average
- higher standard deviation: more spread out from average
*/
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function randomGaussian(mean = 0, stdev = 1) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * stdev + mean;
}

function draw() {
  let x = randomGaussian(320, 60);
  ctx.beginPath();
  ctx.globalAlpha = 0.1; // set transparency
  ctx.fillStyle = "black";
  ctx.ellipse(x, 120, 10, 16, 0, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(draw);
}

draw();

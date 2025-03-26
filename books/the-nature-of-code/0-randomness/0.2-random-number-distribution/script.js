const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let randomCounts = [];
let total = 20;

function setup() {
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  let index = Math.floor(Math.random() * randomCounts.length); // chooses a random index out of the list
  randomCounts[index]++; // increment the random index's value

  ctx.beginPath(); // begin the path
  ctx.fillStyle = "orange"; // set color of bars
  ctx.strokeStyle = "red";

  let w = canvas.width / randomCounts.length; // divide the width space by how many bars there will be from list

  for (let x = 0; x < randomCounts.length; x++) {
    ctx.rect(x * w, canvas.height - randomCounts[x], w - 1, randomCounts[x]); // add rect
    ctx.fill(); // render the path
    ctx.stroke();
  }

  console.log(randomCounts);

  requestAnimationFrame(draw); // loop
}

setup();
draw();

/* 
oversampling: random walker returns to previously visited positions many times, 
which could make sarch fruitles or inefficient.

Levy flight: one strategy to avoid is take a very large step every so often = 
periodically jump far away to reduce the amount of oversampling
requires a custom set of probabilities - longer the step less likely to be picked, shorter the step the more likely

accept-reject algorithm
*/

function acceptreject() {
  // do this "forever" until you find a qualifying random value
  while (true) {
    let r1 = Math.random() * 1; // pick a random value
    let probability = r1; // assign a probability
    let r2 = Math.random() * 1; // pick a second random value
    if (r2 < probability) {
      // does it qualify? if so, you're done!
      return r1;
    }
  }
}
console.log(acceptreject());

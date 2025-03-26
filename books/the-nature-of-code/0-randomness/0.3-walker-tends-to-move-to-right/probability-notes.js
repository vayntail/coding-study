/* single-event probability - likelihood that a given event will occur
outcomes - refer to all the possible results of a rnadom process
event - specific outcome or combination of outcomes being considered */

// finding probability of drawing two aces in a row from a deck of 52 cards
// four aces in a deck

// if you reshuffle your first draw back into deck before making second draw:
console.log((4 / 52) * (4 / 52));

// if didn't reshuffle
console.log((4 / 52) * (4 / 51));

/* ways to apply concepts of probability for nonuniform distribution:
1: fill array with numbers with probability
2: ask for a certain number and apply event only when random number is in range
*/

// 1
let stuff = [1, 1, 2, 3, 3]; // 1 and 3 has higher probability
let value = stuff[Math.floor(Math.random() * stuff.length)];
console.log(value);

// 2
let probability = 0.1;
let r = Math.random() * 1;
if (r < probability) {
  console.log("yurr"); // only prints when probability is met. 10%
}

// you can use that method with multiple outcomes:
let num = Math.random() * 1;
if (num < 0.6) {
  console.log("sing!"); // 60%
} else if (num < 0.7) {
  console.log("dance!"); // 10%
} else {
  console.log("Sleep!"); // 30%
}

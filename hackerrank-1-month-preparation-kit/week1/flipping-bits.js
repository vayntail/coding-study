n = 2147483647;

function flippingBits(n) {
  let str = n.toString(2).padStart(32, "0");
  let result = "";

  for (let digit of str) {
    digit === "0" ? (result += "1") : (result += "0");
  }

  return parseInt(result, 2).toString(10);
}

console.log(flippingBits(n));

// Faster way:
// function flippingBits(n) {
//   return (~n >>> 0).toString(10);
// }

a = [1, 2, 3, 4, 3, 2, 1];

function lonelyinteger(a) {
  const elements = [];
  a.forEach((num) => {
    if (!elements.includes(num)) elements.push(num);
    else elements.splice(elements.indexOf(num), 1);
  });

  return elements[0];
}

console.log(lonelyinteger(a));

// use XOR operator (^) for better efficiency
// function lonelyinteger(a) {
//   return a.reduce((acc, num) => acc ^ num, 0);
// }

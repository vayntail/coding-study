n = 10;

var createCounter = function (n) {
  n = n++;
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

// simpler:
// var createCounter = function (n) {
//   return function () {
//     return n++;
//   };
// };

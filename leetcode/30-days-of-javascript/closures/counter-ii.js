// var createCounter = function (init) {
//   let val = 0;
//   return {
//     increment() {
//       val++;
//       return init + val;
//     },
//     decrement() {
//       val--;
//       return init + val;
//     },
//     reset() {
//       val = 0; // reset
//       return init;
//     },
//   };
// };

var createCounter = function (init) {
  let val = init;
  return {
    increment() {
      return ++val;
    },
    decrement() {
      return --val;
    },
    reset() {
      return (val = init); // reset and return
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

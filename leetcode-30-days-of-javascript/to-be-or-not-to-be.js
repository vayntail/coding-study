var expect = function (val) {
  return {
    toBe: function (val2) {
      if (val2 === val) return true; // cases for if values are same
      else if (
        typeof val2 !== "number" ||
        typeof val !== "number" ||
        val2 === null ||
        isNaN(val2)
      )
        throw "Not Equal"; // cases for if values are {} = {} or null
      else return "Not Equal";
    },

    notToBe: function (val2) {
      if (val2 === null || val2 !== val) return true;
      else throw "Equal";
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).toBe(null)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

// simpler way:
// var expect = function (val) {
//   return {
//     toBe: function (val1) {
//       if (val === val1) return true;
//       throw new Error("Not Equal");
//     },
//     notToBe: function (val1) {
//       if (val !== val1) return true;
//       throw new Error("Equal");
//     },
//   };
// };

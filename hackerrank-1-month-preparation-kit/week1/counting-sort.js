arr = [1, 1, 3, 2, 1];

function countingSort(arr) {
  // create frequency array of 100 elements
  const result = [];
  for (let i = 0; i < 100; i++) {
    result.push(0);
  }

  // iterate frequency array
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] += 1;
  }

  return result;
}

console.log(countingSort(arr));

// Faster Way:
// function countingSort(arr) {
//   const result = new Array(100).fill(0);
//   for (const num of arr) {
//     result[num]++;
//   }
//   return result;
// }

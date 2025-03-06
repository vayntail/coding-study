arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][arr.length - i - 1];
  }

  return Math.abs(leftToRight - rightToLeft);
}

console.log(diagonalDifference(arr));

// optimal. but, for cleaner code:
// function diagonalDifference(arr) {
//   return Math.abs(
//     arr.reduce((acc, row, i) => acc + row[i] - row[arr.length - i - 1], 0)
//   );
// }

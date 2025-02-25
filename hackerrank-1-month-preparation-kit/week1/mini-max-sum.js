arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
  arr.sort();
  let min = arr[0] + arr[1] + arr[2] + arr[3];
  let max = arr[1] + arr[2] + arr[3] + arr[4];
  console.log(min, max);
}

miniMaxSum(arr);

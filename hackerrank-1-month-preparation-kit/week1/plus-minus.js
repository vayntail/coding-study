arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  arr.forEach((el) => {
    if (el > 0) {
      pos += 1;
    } else if (el < 0) {
      neg += 1;
    } else {
      zero += 1;
    }
  });
  console.log(pos / arr.length);
  console.log(neg / arr.length);
  console.log(zero / arr.length);
}

plusMinus(arr);

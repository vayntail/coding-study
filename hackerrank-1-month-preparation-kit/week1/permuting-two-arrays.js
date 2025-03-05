A = [0, 1];
B = [0, 2];
k = 1;

function twoArrays(k, A, B) {
  A.sort(); // ascending
  B.sort((a, b) => b - a); // descending

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) return "NO";
  }
  return "YES";
}

console.log(twoArrays(k, A, B));

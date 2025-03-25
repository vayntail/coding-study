var filter = function (arr, fn) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filtered.push(arr[i]);
  }
  return filtered;
};

// can also do:
// if (Boolean(fn(arr[i], i) === true)) filtered.push(arr[i]);

s = [2, 2, 1, 2, 3];
d = 4;
m = 2;

function birthday(s, d, m) {
  function nestedLoop(m, nest = 0, results = []) {
    if (nest === m) {
      return results.length;
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < s.length; j++) {
        if (s[i] + s[j] === d) {
          // save as string for no duplicates.
          const pair = [s[i], s[j]].sort((a, b) => a - b).toString();
          if (!results.includes(pair)) results.push(pair);
        }
      }
      console.log(results);
      nestedLoop(m, nest + 1, [...results, i]);
    }
  }

  nestedLoop(m);

  // for (let i = 0; i < s.length; i++) {
  //   for (let j = 0; j < s.length; j++) {
  //     if (s[i] + s[j] === d) {
  //       // save as string for no duplicates.
  //       const pair = [s[i], s[j]].sort((a, b) => a - b).toString();
  //       if (!results.includes(pair)) results.push(pair);
  //     }
  //   }
  // }
  // return results.length;
}

console.log(birthday(s, d, m));

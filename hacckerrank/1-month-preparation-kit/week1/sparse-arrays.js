strings = ["ab", "ab", "abc"];
queries = ["ab", "abc", "bc"];

function matchingStrings(strings, queries) {
  const results = [];
  queries.forEach((query) => {
    let count = 0;
    strings.forEach((string) => {
      if (string === query) {
        count += 1;
      }
    });
    results.push(count);
  });
  return results;
}

console.log(matchingStrings(strings, queries));

// use hash map (object in JS) for efficiency over iterating strings at every query.
// function matchingStrings(strings, queries) {
//     const frequencyMap = {};

//     // count occurrences of each string
//     strings.forEach(str => {
//         frequencyMap[str] = (frequencyMap[str] || 0) + 1;
//     });

//     // retrieve counts for each query
//     return queries.map(query => frequencyMap[query] || 0);
// }

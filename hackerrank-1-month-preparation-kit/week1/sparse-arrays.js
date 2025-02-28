strings = ['ab', 'ab', 'abc'];
queries = ['ab', 'abc', 'bc'];

function matchingStrings(strings, queries) {
    const results = [];
    queries.forEach(query => {
        let count = 0;
        strings.forEach(string => {
            if (string===query){
                count += 1;
            }
        })
        results.push(count);
    });
    return results;
}

console.log(matchingStrings(strings, queries));
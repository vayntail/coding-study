s = "The quick brown fox jumps over the lazy dog";

function pangrams(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  s = s.trim().replace(/\s+/g, "").toLowerCase(); // trim white
  for (const char of alphabet) {
    if (!s.includes(char)) {
      return "not pangram";
    }
  }
  return "pangram";
}

console.log(pangrams(s));

// Faster way using set. Since set only stores unique letters as long as
// its size is 26 you can be sure it goes through all alphabet.
// function pangrams(s) {
//   const letterSet = new Set(s.toLowerCase().replace(/[^a-z]/g, ""));
//   return letterSet.size === 26 ? "pangram" : "not pangram";
// }

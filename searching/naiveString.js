function stringSearch(string, pattern) {
  let patternExistCounter = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== string[i + j]) break;
      if (j === pattern.length - 1) patternExistCounter++; // if j is equal to the last iteration then increment the count by 1;
    }
  }
  return patternExistCounter;
}

console.log(stringSearch("tawhidabdullah", "hid")); // 1 

// given a string print the number of times each character appears in the string

let str = "hello world";

let charCount = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (charCount[char] == undefined) {
    charCount[char] = 1;
  } else {
    charCount[char]++;
  }
}
console.log(charCount);

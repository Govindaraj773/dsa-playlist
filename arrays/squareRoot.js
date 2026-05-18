// Given integer num, return the square root of num rounded down to the nearest integer.
// and the return integer is non-negative.

// 1. Binary search approach---------------------------------------
let squareRoot = function (num) {
  let left = 0;
  let right = num;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === num) {
      return mid;
    } else if (mid * mid < num) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};

console.log("--------Binary approach results--------");
console.log(squareRoot(4));
console.log(squareRoot(25));
console.log(squareRoot(24));
console.log(squareRoot(48));

// 2. Brute force approach ---------------------------------------
function squareRoot2(num2) {
  let i = 1;
  while (i * i <= num2) {
    i++;
  }
  return i - 1;
}
console.log("--------Brute force approach--------");
console.log(squareRoot2(4));
console.log(squareRoot2(25));
console.log(squareRoot2(24));
console.log(squareRoot2(48));

// 3. Using Loop method approach ---------------------------------------
function squareRoot3(num3) {
  for (let i = 0; i <= num3; i++) {
    if (i * i > num3) {
      return i - 1;
    }
  }
}
console.log("------Loop method approach------");
console.log(squareRoot3(4));
console.log(squareRoot3(25));
console.log(squareRoot3(24));
console.log(squareRoot3(48));

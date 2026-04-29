// finding single number in an below array where every element appear twice

let nums = [1, 2, 3, 2, 1];

let singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
};
console.log(singleNumber(nums));

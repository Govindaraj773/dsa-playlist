
var nums =  [1, 1, 2];

var removeDuplicatesBruteForce = function(nums) {
    if (nums.length === 0) return 0;

    let temp = [];
    
    // Step 1: Find unique elements and store them in temp
    temp.push(nums[0]); // The first element is always unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            temp.push(nums[i]);
        }
    }

    // Step 2: Copy unique elements back to the original array
    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i];
    }

    // Return the count of unique elements
    return temp.length;
};

// Example Trace:
// Input: [1, 1, 2]
// Temp: [1, 2]
// Modified nums: [1, 2, 2] (only first 2 elements matter)
// Returns: 2
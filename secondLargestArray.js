function findSecondLargest(arr) {
  if (arr.length < 2) {
    console.log("Array must have at least two elements");
    return;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  console.log("Second Largest:", secondLargest);
}

const arr = [10, 45, 23, 67, 89, 45];
findSecondLargest(arr);

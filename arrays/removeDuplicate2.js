let sortArr = [1, 1, 2];

let removeDuplicates = function (sortArr) {
  if (sortArr.length === 0) return [];

  let uniqueIndex = 0;

  for (let i = 1; i < sortArr.length; i++) {
    if (sortArr[i] !== sortArr[uniqueIndex]) {
      uniqueIndex++;
      sortArr[uniqueIndex] = sortArr[i];
    }
  }

  return sortArr.slice(0, uniqueIndex + 1);
};
console.log(removeDuplicates(sortArr));

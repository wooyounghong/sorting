// split function which splits array into halves;
// returns newly created array;

const split = (wholeArray) => {
  const middleIdx = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, middleIdx);
  const secondHalf = wholeArray.slice(middleIdx);
  console.log('first', firstHalf, 'second', secondHalf)
  return [firstHalf, secondHalf];
}

// console.log(split([1, 2, 3]));
// merge has two sorted arrays;
// i am goin to look at the first element of each one;
// compare them;
// if one is less, then push the result;
// comparing the first element of left and right array;

const merge = (first, second) => {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  
  while (leftIdx < first.length || rightIdx < second.length) {
    if (first[leftIdx] < second[rightIdx]) {
      result.push(first[leftIdx]); // 1 vs 3 .. push 1;
      leftIdx++;
    } else {
      result.push(second[rightIdx]);
      rightIdx++;
    }
  }
  return result;
}
// returns one sorted array;


// console.log(merge([1, 2], [3, 4]));

const mergeSort = (array) => {
  // array.length = 1;
  if (array.length < 2) {
    return array;
  }
  const splittedArr = split(array); // returns [[1, 2], [3, 4]];
  let firstHalf = splittedArr[0];
  let secondHalf = splittedArr[1];

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

// console.log('split', split([1, 4, 2, 5]));
// console.log('merge', merge([[1, 4], [2, 5]]))
console.log('merge', mergeSort([1, 3, 5, 20, 25, 34]))
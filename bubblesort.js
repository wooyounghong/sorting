// const bubbleSort = (array) => {
//   if (array.length < 2) {
//     return array;
//   }
//   // inputArr = [3, 5, 1]
//   // first: we are going to compare 3 and 5  
//     // if 3 < 5,
//       // no change;  [3, 5 ,1]   => length - 1
//     // now we compare : 5 and 1 ; 5 > 1
//       // we swap 5 and 1; => [3, 1, 5]
//       // we have fixed number 5 at the end of the array
//       // decrement the end point of the array; 
//   // now we really have is [3, 1] + [5]
//     // if 3 > 1
//       // we swap number 3: [1, 3, 5];
//       //  we have fixed number 3 at the end of the array;
//       // decrement the end point of the array;
//   //  how do you think we could write that loop is done?
//     // two conditions:
//       // 1. when endpoint in the array is
//       // 2. at any point when we are going thru the array, when we didnt swap anything the array must be in order;
  
//   // would first as for-loop -> what are we trying to use for loop for?
//   // loop through the array;
//   for (let i = 0; i < array.length; i++) {
//     let firstNum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       let secondNum = array[j];
//       if (firstNum > secondNum) {
//         console.log(firstNum, secondNum)
//         let temp = firstNum;
//         firstNum = secondNum;
//         secondNum = temp;
//         // console.log(firstNum, secondNum)
//         console.log(array)
//       }
//       array[i] = firstNum;
//       array[i + 1] = secondNum;
//       // array.length--;
//     }
//   }
//   return array;
// }


function bubbleSort(inArray) {
  if (inArray.length < 2) {
    return inArray;
  }

  // inputArr = [3, 5, 1]
  // first: we are going to compare 3 and 5
  // if 3 < 5,
  // no change;  [3, 5 ,1]   => length - 1
  // now we compare : 5 and 1 ; 5 > 1
  // we swap 5 and 1; => [3, 1, 5]
  // we have fixed number 5 at the end of the array
  // decrement the end point of the array;
  // now we really have is [3, 1] + [5]
  // if 3 > 1
  // we swap number 3: [1, 3, 5];
  //  we have fixed number 3 at the end of the array;
  // decrement the end point of the array;
  //  how do you think we could write that loop is done?
  // two conditions:
  // 1. when endpoint in the array is
  // 2. at any point when we are going thru the array, when we didnt swap anything the array must be in order;

  let numSwaps = 0;
  console.log(`initial inArray is          ${inArray}`);
  for (let j = 0; j < inArray.length - 1; j++) {
    let innerLoopEnd = inArray.length - 1 - j;
    for (let i = 0; i < innerLoopEnd; i++) {
      if (inArray[i] > inArray[i + 1]) {
        let temp = inArray[i + 1];
        inArray[i + 1] = inArray[i];
        inArray[i] = temp;
        numSwaps++;
      }
    }
    console.log(`iteration ${j} inArray is ${inArray}`);
  }
  console.log(`We swapped ${numSwaps} times`);
  return inArray;
}

let outArray = bubbleSort([234, 17, 96, 33]);
//console.log(outArray);



console.log(bubbleSort([4, 3, 2]))
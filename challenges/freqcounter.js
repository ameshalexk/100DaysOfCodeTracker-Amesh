// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

function same(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i in frequencyCounter1) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
  }

  for (let j in frequencyCounter2) {
    frequencyCounter2[j] = (frequencyCounter2[j] || 0) + 1;
  }

  for (let k in frequencyCounter1) {
    if (!(k ** 2 > frequencyCounter)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

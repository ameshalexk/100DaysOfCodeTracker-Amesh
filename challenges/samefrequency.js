function same(a, b) {
  let arr1 = a.toString().split('');
  let arr2 = b.toString().split('');

  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same(182, 281));

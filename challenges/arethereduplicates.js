// function areThereDuplicates(...arguments) {
//   console.log(...arguments);
//   let collection = {};
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//     // console.log(collection[arguments[val]]);
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return true;
//   }
//   return false;
// }
// function areThereDuplicates(...arguments) {
//   // Two pointers
//   arguments.sort((a, b) => a > b);
//   let start = 0;
//   let next = 1;
//   while (next < arguments.length) {
//     if (arguments[start] === arguments[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// function areThereDuplicates(...arguments) {
//   console.log(...arguments, true);
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

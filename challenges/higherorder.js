// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   }
// }

// const triple = multiplyBy(2)

// triple(6)


//factory

function makeBetweenFunc(x,y) {
  return function (num) {
    return num>= x && num <= y;
  }
}


// const isChild  = makeBetweenFunc(0,18);
const isInNineties  = makeBetweenFunc(1990,2000);


// console.log(isChild(77));
// console.log(isChild(17));
console.log(isInNineties(1995));
console.log(isInNineties(2005));

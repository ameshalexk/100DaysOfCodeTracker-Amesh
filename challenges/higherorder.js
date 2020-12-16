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


const isChild  = makeBetweenFunc(0,18);


console.log(isChild(77));

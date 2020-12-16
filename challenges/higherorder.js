function multiplyBy(num) {
  return function (x) {
    return x * num;
  }
}

const triple = multiplyBy(2)

triple(6)

function faktorial(n) {
  if (n <= 0) {
    return 1;
  } else {
    result = n * faktorial(n - 1);
  }
  return result;
}

function factorialTailRecursive(total, value) {
  if (value <= 0) {
    return total;
  } else {
    return factorialTailRecursive(total * value, value - 1);
  }
}

console.log(factorialTailRecursive(1, 5));

console.log(faktorial(6));

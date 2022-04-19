function superDigit(n, k) {
  // Write your code here
  let digit = 0;

  for (let num of n.toString()) {
    digit += Number(num);
  }
  digit *= k;

  if (digit / 10 > 1) {
    console.log(digit);
    return superDigit(digit, 1);
  } else {
    return digit;
  }
}

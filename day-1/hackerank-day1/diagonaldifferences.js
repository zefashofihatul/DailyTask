const input = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // write code here
  // arr[row][col]
  const resultArray = [];
  let countDec = arr.length - 1;
  let sumA = 0;
  let sumB = 0;

  for (let a = 0; a <= arr.length - 1; a++) {
    sumA += arr[a][a];
    sumB += arr[a][countDec--];
  }

  return Math.abs(sumA - sumB);
}

console.log(diagonalDifference(input));

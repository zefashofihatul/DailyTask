// input [1,2,3,4,5] (input ganjil) => [3]
// input [1,2,3,4] (genap) => [2,3]
// input.length = 4 -> 4/2 = 2 -> upper -> 2 -> input[2 - 1], input[2]
// input.length = 5 -> 5/2 = 2,3 -> upper -> 3 -> input[3 - 1]

function median(arr) {
  console.log(arr);
  arr = arr.sort((a, b) => a - b);
  const arrLength = arr.length;
  const dividerLength = Math.ceil(arrLength / 2);

  if (arrLength % 2 == 0) {
    // Genap
    return [arr[dividerLength - 1], arr[dividerLength]];
  } else {
    // Ganjil
    return [arr[dividerLength - 1]];
  }
}

console.log(median([1, 2, 3, 4, 6, 4, 5]));

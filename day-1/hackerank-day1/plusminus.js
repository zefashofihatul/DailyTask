function plusMinus(arr) {
  // Variable declaration
  let negative = 0;
  let positive = 0;
  let zero = 0;

  // Looping array
  arr.forEach((data) => {
    data < 0 ? negative++ : 0;
    data > 0 ? positive++ : 0;
    data == 0 ? zero++ : 0;
  });

  // Output print
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

const result = plusMinus([1, 1, 0, -1, -1]);
console.log(toFix(1, 6));

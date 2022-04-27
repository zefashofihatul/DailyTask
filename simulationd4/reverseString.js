// input "Aku Suka coDing"
// output "Uka Akus ngIdoc"

function reverseString(str) {
  const dataSplit = str.split(' ');

  // reversing
  const reversing = dataSplit.map((value, index) =>
    value.toLowerCase().split('').reverse().join('')
  );

  // Cheking uppercase
  const isUppercase = (string) => /[A-Z]/.test(string);

  // Checking and replace it
  const result = reversing.map((value, index) => {
    let currentResult = '';
    for (data in value) {
      currentResult += isUppercase(dataSplit[index][data])
        ? reversing[index][data].toUpperCase()
        : reversing[index][data];
    }
    return currentResult;
  });

  return result;
}

console.log(reverseString('Aku Suka coDing'));

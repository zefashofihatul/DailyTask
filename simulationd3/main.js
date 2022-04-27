// Input ["I", "Love", "CoDing", "Pisan", "euY"]
// Expected output ["I", "Ovel", "GoDing", "Yue"]

function reverseString(str) {
  // Reversing Array
  let dataInput = str.split(' ');
  let reverseArray = dataInput.map((value, index) =>
    value.split('').reverse().join('').toLowerCase()
  );

  // Cheking uppercase function
  isUppercase = (string) => /[A-Z]/.test(string);

  // Membandingkan array dengan input untuk pengecekan Uppercase
  let result = [];
  reverseArray.map((value, index) => {
    let stringResult = '';
    for (b in value) {
      // Jika "huruf" maka lakukan toUpperCase pada count reverseArray nya
      stringResult += isUppercase(dataInput[index][b])
        ? reverseArray[index][b].toUpperCase()
        : reverseArray[index][b];
    }
    result.push(stringResult);
  });

  return result;
}

console.log(reverseString('I Love CoDing Pisan euY'));

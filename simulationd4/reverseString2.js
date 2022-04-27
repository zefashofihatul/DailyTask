// input "Aku sUka KAmu Ini JuJuR Loehhh"
// output "aKU SuKA kaMU iNI jUjUr lOEHH"

// split (string) -> array ["aku" "suka" ...]
// mapping (array of string) -> checking uppercase
// Chage value

function reverseString(str) {
  const dataSplit = str.split(' ');

  isUppercase = (string) => /[A-Z]/.test(string);

  const result = dataSplit.map((value, index) => {
    let currentResult = '';
    for (data in value) {
      currentResult += isUppercase(value[data])
        ? value[data].toLowerCase()
        : value[data].toUpperCase();
    }
    return currentResult;
  });

  console.log(result);
  return result;
}

reverseString('Aku sUka KAmu Ini JuJuR Loehhh');

// input "aku suka kamu yang selalu senyum"
// output "Aku Suka Kamu Yang Selalu Senyum"

function stringUpperCheck(str) {
  const dataSplit = str.split(' ');

  // Cheking uppercase
  const isUpperCase = (string) => /[A-Z]/.test(string);

  // Modif string
  let count = 0;
  const result = dataSplit.map((value, index) => {
    let resultCurrent = '';
    for (i in value) {
      resultCurrent += i == 0 ? value[i].toUpperCase() : value[i];
    }
    return resultCurrent;
  });

  console.log(result);
  return result;
}

stringUpperCheck('aku suka kamu yang selalu senyum');

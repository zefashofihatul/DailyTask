function isUpper(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

function caesarCipher(s, k) {
  // Write your code here
  let uncrypted = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let crypted = [...uncrypted];
  const splittingString = s.split("");
  const result = [];

  for (let a = k; a > 0; a--) {
    let shifting = crypted.shift();
    crypted.push(shifting);
  }

  splittingString.forEach((letter) => {
    if (/^[a-zA-Z]+$/.test(letter)) {
      if (/[A-Z]/.test(letter)) {
        let indexUpper = uncrypted.indexOf(letter.toLowerCase());
        console.log(indexUpper);
        result.push(crypted[indexUpper].toUpperCase());
      } else {
        let indexLower = uncrypted.indexOf(letter);
        result.push(crypted[indexLower]);
      }
    } else {
      result.push(letter);
    }
  });

  console.log(crypted);
  console.log(uncrypted);

  return `${result.join("")}`;
}

console.log(caesarChiper(`There's-a-starman-waiting-in-the-sky`));

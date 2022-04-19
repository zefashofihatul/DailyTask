let container = document.getElementsByClassName('container')[0];

// ganjil "Santai"
// genap "Berkualitas"
// kelipatan 3 dan ganjil "I Love coding"

// [1,2,34,5 ..];

let potensio = Array.from({ length: 20 }, (v, k) => k + 1);

function perulangan(arr) {
  let result = [];

  // Perulangan
  for (let value of arr) {
    if (value % 2 == 0) {
      // Pengkondisian untuk nilai genap
      result.push(`${value} : Berkualitas`);
    } else {
      // Pengkondisian nilai ganil dan kelipatan 3
      if (value % 3 == 0) {
        result.push(`${value} : I Love Coding`);
        continue;
      }

      // Pengkondisian untuk nilai ganjil
      result.push(`${value} : Santai`);
    }
  }

  return result;
}

console.log(perulangan(potensio));

function lonelyInteger(a) {
  let arraySort = a.sort((a, b) => a - b);

  if (arraySort.length > 2) {
    let result = 0;

    for (let index = 0; index <= arraySort.length; index++) {
      if (index % 2 == 1) {
        if (arraySort[index - 1] !== arraySort[index]) {
          result = arraySort[index - 1];
          return result;
        }
      }
    }
  } else {
    return arraySort[0];
  }
}

console.log(lonelyInteger([1, 2, 1, 2, 3, 4, 4]));

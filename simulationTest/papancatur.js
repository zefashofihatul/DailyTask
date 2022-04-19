function papanCatur() {
  let result = [];

  for (let rowA = 8; rowA > 0; rowA--) {
    let currentResult = '';
    for (let rowB = 8; rowB > 0; rowB--) {
      if (rowA % 2 == 0) {
        currentResult += rowB % 2 == 0 ? ' ' : '#';
      } else {
        currentResult += rowB % 2 == 0 ? '#' : ' ';
      }
    }
    result.push(currentResult);
  }
  return result;
}

console.log(papanCatur());

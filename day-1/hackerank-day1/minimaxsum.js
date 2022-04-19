function minimaxsum(arr) {
  arr.sort((a, b) => a - b);
  const [minimum, ...restMinimum] = arr;

  const sumMinimum = restMinimum.reduce((prev, current) => {
    return prev + current;
  });

  arr.pop();
  const sumMaximum = arr.reduce((prev, current) => {
    return prev + current;
  });

  console.log(`${BigInt(sumMinimum)}  ${BigInt(sumMaximum)}`);
  console.log(Number.MAX_SAFE_INTEGER);
}

minimaxsum([
  299999999999999999999999999, 1939201938109283210983019283091809318,
  12830129380192830198301928, 1293102398109, 5,
]);

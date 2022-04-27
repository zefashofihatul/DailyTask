// Mencari bilangan hasil 7 dalam sebuah array
// let arr = [3, 5, 2, -4, 8, 11];

// expect output:
// 5, 2
// -4, 11

// Looping array 2 dimensi

function sevenFunction(arr) {
  // result = menampung hasil
  let result = []; // result.length == 12

  // for pertama untuk dimensi 1
  for (data in arr) {
    // for kedua untuk dimensi 2
    for (data1 in arr) {
      // percabangan data + data1 hasil == 7 push array result

      if (arr[data] + arr[data1] == 7) {
        // Checking result
        if (
          !result.find(
            (value) =>
              `${value}` == `${[arr[data], arr[data1]]}` ||
              `${value.reverse()}` == `${[arr[data], arr[data1]]}`
          )
        ) {
          // Push data if there no containing the same data
          result.push([arr[data], arr[data1]]);
        }
      }
    }
  }

  // let currentResult = [];
  // result.forEach((value, index) => {
  //   if (JSON.stringify(value.reverse()) == JSON.stringify(result[index + 1])) {
  //     console.log(`${value[0]}, ${value[1]}`);
  //     currentResult.push(value);
  //   }
  // });

  // return result
  // return currentResult;
  console.log(result);
  return result;
}

sevenFunction([3, 5, 2, -4, 8, 11]);

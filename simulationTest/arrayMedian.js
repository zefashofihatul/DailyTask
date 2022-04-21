// Input : array[n: int] -> n : 1 - 100
// Tentukan median -> nilai tengah dari sebuah array
// Input : [1,2,4,3,5,4] -> Output : [1,2,3,4,4,5] -> [3,4]
// [1,2,3,4,5,6] -> arr[2] arr[3] -> 6/2 = r -> r - 1 && r
// [1,2,3,4,5] -> arr[2] -> 5/2 = 2,5 = r -> Math.floor() -> r

function median(arr) {
  // Menentukan berapa panjang array / array.length
  let arrayLength = arr.length;
  // Sorting arr ascending
  let arrSort = arr.sort((a, b) => a - b);
  // Menentukan apakah array ganjil atau genap
  if (arrayLength % 2 == 0) {
    // genap
    return [arrSort[arrayLength / 2 - 1], arrSort[arrayLength / 2]];
  } else {
    // ganjil
    return [arrSort[Math.floor(arrayLength / 2)]];
  }
  // apabila array ganjil maka output akan tunggal
  // Apabila array genap maka output akan double
}

function methodearray(arr) {
  // memperharui array dengan menghapus dan menambah elemen serta mengembalikan arr yang baru
  let spliceArr = arr.splice(3, 1, 'Jawa Barat');
  // spliceArr -> "Jawabarat"

  // "Zefa Shofihatul" -> "Zefa", "Shofihatul"
  let splitArray = arr[0].split(' ');
  // Tidak menghasilkan array yang baru
  // arr.shift();
  // console.log([...splitArray, ...arr]);

  // Membalikan isi array
  let reverseArray = arr.reverse();
  console.log(reverseArray);
  // Apabila array memiliki nilai n: int maka method yang digunakan adalah
  // asc
  let sortArrayasc = [2, 3, 10, 23, 44].sort((a, b) => a - b);
  // des
  let sortArraydes = [2, 3, 5, 4, 23, 99].sort((a, b) => a + b);
  // console.log(sortArraydes);

  // Method slice
  let sliceArr = ['satu', 2, 'Lima', 'Zefa'].slice(0, 2);
  console.log(sliceArr);

  // switch case
  console.log(arr);
  switch (arr[2]) {
    case '01':
      console.log('Januari');
      break;
    case '02':
      console.log('Februari');
      break;
    case '03':
      console.log('Maret');
      break;
    case '12':
      console.log('Desember');
    default:
      console.log('data tidak ditemukan');
      break;
  }
}

function chessBoard() {
  let result = [];
  // Pengulangan batas baris
  // Pengulangan membatasi column
  for (let rowA = 0; rowA < 8; rowA++) {
    let resultCurrent = '';
    for (let colA = 0; colA < 8; colA++) {
      // Condition 1 reverse baris
      if (rowA % 2 == 0) {
        // condition 2 rever column
        resultCurrent += colA % 2 == 0 ? '#' : ' ';
      } else {
        resultCurrent += colA % 2 == 0 ? ' ' : '#';
      }
    }
    result.push(resultCurrent);
  }
  // Condition untuk melakukan print reverse pada rows
  // Condition untuk melakukan print reverse pada column
  return result;
}

console.log(chessBoard());

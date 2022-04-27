// input ["123", "zef2sdf", "2kdj2"]
// output ["12aku3", "zef2akusdf", "2akukdj2aku"];
// looping array -> value = "123" -> split "" -> ["1","2","3"] -> jika data == 2 add "aku" -> join

function compareString(arr) {
  arr.map((value, index) => {
    let current = '';
    for (data in value) {
      current += value[data] == '2' ? '' : value[data];
    }
    return current;
  });
}

console.log(compareString(['123', 'zef2sdf', '2kdj2']));

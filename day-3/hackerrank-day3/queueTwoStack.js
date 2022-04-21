function queueTwoStack(input) {
  //Enter your code here
  let result = input.split('\n');
  let queue = [];

  result.map((value, index) => {
    let a = value.split(' ');
    if (index != 0) {
      if (a[0] == 1) {
        queue.push(a[1]);
      } else if (a[0] == 2) {
        queue.shift();
      } else if (a[0] == 3) {
        console.log(queue[0]);
      }
    }
  });
}

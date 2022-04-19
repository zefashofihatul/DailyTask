function newyearchaotic(q) {
  // Menghitung length dari queue
  // Cheking posisi max value
  var bribes = 0;
  var bribesOld = -1;
  var temp;
  while (bribes != bribesOld) {
    bribesOld = bribes; //if these equal each other later, exit while loop
    for (var i = 0; i < q.length - 1; i++) {
      if (q[i] > i + 3) {
        console.log('Too chaotic');
        return;
      }
      if (q[i] > q[i + 1]) {
        temp = q[i];
        q[i] = q[i + 1];
        q[i + 1] = temp;
        bribes++;
      }
    }
  }
  console.log(bribes);
}

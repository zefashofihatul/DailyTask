function isBalanced(s) {
  // Write your code here
  let resultCurrent = 'YES';

  const splitData = s.split('').sort();
  let data1 = 0;
  let data2 = 0;
  let data3 = 0;

  splitData.forEach((value, index) => {
    value == '[' || value == ']' ? data1++ : 0;
    value == '{' || value == '}' ? data2++ : 0;
    value == '<' || value == '>' ? data3++ : 0;
  });

  if (data1 % 2 !== 0 || data2 % 2 !== 0 || data3 % 2 !== 0) {
    return 'NO';
  }

  // for (let a = 0; a < lengthDivider; a++) {
  //   console.log(s[a], s[s.length - 1 - a]);
  //   if (s[a] == '{') {
  //     if (s[s.length - 1 - a] !== '}') {
  //       return 'NO';
  //     }
  //   } else if (s[a] == '[') {
  //     if (s[s.length - 1 - a] !== ']') {
  //       return 'NO';
  //     }
  //   } else if (s[a] == '<') {
  //     if (s[s.length - 1 - a] !== '>') {
  //       return 'NO';
  //     }
  //   }
  // }

  return resultCurrent;
}

function isBalanced2(s) {
  if (s.length % 2 !== 0) return 'NO';

  const regex = /(\[])|({})|(\(\))/g;
  while (s.match(regex)) {
    s = s.replace(regex, '');
  }
  console.log(s);

  return s.length ? 'NO' : 'YES';
}

console.log(isBalanced2('{()}'));

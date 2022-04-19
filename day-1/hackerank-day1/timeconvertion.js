function timeconvertion(string) {
  let dayTime = string.slice(-2);
  let time = string.replace(/PM|AM/, '').split(':');
  let hour = parseInt(time[0]);
  let minute = time[1];
  let secon = time[2];
  if (dayTime == 'AM') {
    hour = (hour >= 12 ? hour - 12 : hour).toString();
    hour = hour < 9 ? '0' + hour.toString() : hour;
  } else {
    hour = (hour >= 12 ? hour : hour + 12).toString();
    hour = hour < 9 ? '0' + hour.toString() : hour;
  }
  console.log(`${hour}:${minute}:${secon}`);
}

timeconvertion(`12:45:54AM`);

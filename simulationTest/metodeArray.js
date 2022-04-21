const input = [
  '0001',
  'Roman Alamsyah',
  'Bandar Lampung',
  '21/05/1998',
  'Membaca',
];

const dateHandling2 = (arr) => {
  arr.splice(2, 1, 'Provinsi Bandar Lampung');
  arr.splice(4, 1, 'Pria');
  arr.splice(5, 0, 'SMA Internasional Metro');
  arr.splice(1, 1, 'Roman Alamsyah Elsharawy');
  console.log(arr);
};

const dateStringify = (arr) => {
  const dateSplit = arr[3].split('/');

  switch (dateSplit[1]) {
    case '01':
      console.log('januari');
      break;
    case '02':
      console.log('februari');
      break;
    case '03':
      console.log('maret');
      break;
    case '04':
      console.log('april');
      break;
    case '05':
      console.log('mei');
      break;
    case '06':
      console.log('juni');
      break;
    case '07':
      console.log('juli');
      break;
    case '08':
      console.log('agustus');
      break;
    case '09':
      console.log('september');
      break;
    case '10':
      console.log('oktober');
      break;
    case '11':
      console.log('november');
      break;
    case '12':
      console.log('desember');
      break;
    default:
      console.log(`data tidak ada`);
  }

  console.log(dateSplit);
  console.log(dateSplit.join('-'));
  console.log(arr[1].slice(0, 15));
};

dateHandling2(input);
dateStringify(input);

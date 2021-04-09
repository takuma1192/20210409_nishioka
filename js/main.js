function isLeapYear(year) {
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

if(isLeapYear(2020)) {
  console.log('2020年はうるう年です');
} else {
  console.log('2020年はうるう年ではありません');
}

if(isLeapYear(2021)) {
  console.log('2021年はうるう年です');
} else {
  console.log('2021年はうるう年ではありません');
}
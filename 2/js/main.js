function getRandomInteger(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInteger(1, 30);

function getRandomFloat(min, max, decimalDigits) {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Number((Math.random() * (max - min + 1) + min).toFixed(decimalDigits));
}
getRandomFloat(1, 30, 5);

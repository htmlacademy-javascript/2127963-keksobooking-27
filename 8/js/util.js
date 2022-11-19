const getRandomElement = function (arrayElements) {
  return arrayElements[getRandomInteger(0, arrayElements.length - 1)];
};

const getRandomArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, getRandomInteger(1, array.length - 1));
};

function getRandomInteger(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimalDigits) {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Number((Math.random() * (max - min + 1) + min).toFixed(decimalDigits));
}

const isEscapeKey = (evt) => evt.key === 'Escape';


export { getRandomElement, getRandomArray, getRandomInteger, getRandomFloat, isEscapeKey };
//export { getRandomElement, getRandomArray, getRandomInteger, getRandomFloat};

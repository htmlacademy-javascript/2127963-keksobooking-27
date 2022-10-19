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

const authorPhotos = [];
for (let i = 0; i < 10; i++) {
  if (i + 1 < 10) {
    authorPhotos[i] = `img/avatars/user0${i + 1}.png`;
  } else {
    authorPhotos[i] = `img/avatars/user${i + 1}.png`;
  }
}

const advertismentTitles = [
  'Все достопримечательности - под лапой',
  'Замяучательное место',
  'Мимимишность в центре Мурррманска',
  'Классно и уютно',
  'Уютное местечко с бесплатным муррроженым на завтрак',
  'Ляпота в Мяулане',
  'У Мяуки',
  'У Мурлыки',
  'Милая комната со смяутаной на завтрак',
  'До Кексокафе - лапой подать',
];

const priceMin = 0;
const priceMax = 100000;
const accomodationTypes = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const roomNumberMin = 1;
const roomNumberMax = 100;
const guestNumberMin = 1;
const guestNumberMax = 100;
const checkinTime = ['12:00', '13:00', '14:00'];
const checkoutTime = ['12:00', '13:00', '14:00'];
const availableFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const accomodationDescriptions = [
  'В номерах установлен кондиционер.',
  'В распоряжении гостей собственная ванная комната.',
  'По утрам сервируется континентальный завтрак с мяусом',
  'Гости могут взять напрокат велосипед или мурмобиль.',
  'Рядом находятся такие известные достопримечательности, как Собор Святого Мурра я и Национальный исторический музей Мурландии',
  'В пешей доступности Всемирный Кошачий театр оперы и балета',
  'Для отдыха обустроена терраса',
  'Бесплатный Meow-Fi на всей территории',
  'Есть мини-бар, сейф и телевизор с плоским экраном',
  'Это просто мяучта',
];

const accomodationPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const latMin = 35.65000;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;

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

const getAdvertisment = function () {
  const location = {
    lat: getRandomFloat(latMin, latMax, 5),
    lng: getRandomFloat(lngMin, lngMax, 5),
  };

  return {
    author: {
      avatar: getRandomElement(authorPhotos),
    },
    offer: {
      title: getRandomElement(advertismentTitles),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(priceMin, priceMax),
      type: getRandomElement(accomodationTypes),
      rooms: getRandomInteger(roomNumberMin, roomNumberMax),
      guests: getRandomInteger(guestNumberMin, guestNumberMax),
      checkin: getRandomElement(checkinTime),
      checkout: getRandomElement(checkoutTime),
      features: getRandomArray(availableFeatures),
      description: getRandomElement(accomodationDescriptions),
      photos: getRandomArray(accomodationPhotos),
    },
    location: location,
  };
};

getAdvertisment();

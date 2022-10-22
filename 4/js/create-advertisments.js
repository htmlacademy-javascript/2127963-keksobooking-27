import {getRandomElement} from './util.js';
import {getRandomArray} from './util.js';
import {getRandomInteger} from './util.js';
import {getRandomFloat} from './util.js';

const ADVERTISMENT_NUMBER = 10;
const DIGIT_NUMBER = 5;
const ADVERTISMENT_TITLES = [
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

const PRICE_MIN = 0;
const PRICE_MAX = 100000;
const ACCOMODATION_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOM_NUMBER_MIN = 1;
const ROOM_NUMBER_MAX = 100;
const GUEST_NUMBER_MIN = 1;
const GUEST_NUMBER_MAX = 100;
const CHECK_IN_TIME = ['12:00', '13:00', '14:00'];
const CHECK_OUT_TIME = ['12:00', '13:00', '14:00'];
const AVAILABLE_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ACCOMODATION_DESCRIPTIONS = [
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

const ACCOMODATION_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const authorPhotos = [];
for (let i = 0; i < ADVERTISMENT_NUMBER; i++) {
  if (i + 1 < ADVERTISMENT_NUMBER) {
    authorPhotos[i] = `img/avatars/user0${i + 1}.png`;
  } else {
    authorPhotos[i] = `img/avatars/user${i + 1}.png`;
  }
}

const getAdvertisment = function () {
  const location = {
    lat: getRandomFloat(LAT_MIN, LAT_MAX, DIGIT_NUMBER),
    lng: getRandomFloat(LNG_MIN, LNG_MAX, DIGIT_NUMBER),
  };

  return {
    author: {
      avatar: getRandomElement(authorPhotos),
    },
    offer: {
      title: getRandomElement(ADVERTISMENT_TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(PRICE_MIN, PRICE_MAX),
      type: getRandomElement(ACCOMODATION_TYPES),
      rooms: getRandomInteger(ROOM_NUMBER_MIN, ROOM_NUMBER_MAX),
      guests: getRandomInteger(GUEST_NUMBER_MIN, GUEST_NUMBER_MAX),
      checkin: getRandomElement(CHECK_IN_TIME),
      checkout: getRandomElement(CHECK_OUT_TIME),
      features: getRandomArray(AVAILABLE_FEATURES),
      description: getRandomElement(ACCOMODATION_DESCRIPTIONS),
      photos: getRandomArray(ACCOMODATION_PHOTOS),
    },
    location,
  };
};

const createAdvertisments = function () {
  return Array.from({length: ADVERTISMENT_NUMBER}, getAdvertisment);
};

export {createAdvertisments};

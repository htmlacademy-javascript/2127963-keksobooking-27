import {createAdvertisments} from './create-advertisments.js';
const accomodationTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const mapCardBlock = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);
  const {
    title,
    address,
    price,
    rooms,
    guests,
    checkin,
    checkout,
    photos,
    description,
    features,
    type,
  } = offer;

  if (author.avatar) {
    cardElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    author.avatar.remove();
  }

  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__text--address').textContent = address;
  cardElement.querySelector('[data-price]').textContent = price;

  const popupCapacity = cardElement.querySelector('.popup__text--capacity');
  if (rooms && guests) {
    popupCapacity.textContent = `${rooms} комнаты для ${guests} гостей`;
  } else {
    popupCapacity.remove();
  }

  const popupTime = cardElement.querySelector('.popup__text--time');
  if (checkin && checkout) {
    cardElement.querySelector('[data-checkin]').textContent = checkin;
    cardElement.querySelector('[data-checkout]').textContent = checkout;
  } else {
    popupTime.remove();
  }

  if (photos && photos.length) {
    const popupPhotos = cardElement.querySelector('.popup__photos');
    const popupPhoto = popupPhotos.querySelector('.popup__photo');
    popupPhotos.innerHtml = '';

    for (const photo of photos) {
      popupPhoto.src = photo;
      popupPhotos.append(popupPhoto);
    }
  } else {
    photos.remove();
  }

  if (description && description.length) {
    cardElement.querySelector('.popup__description').textContent = description;
  } else {
    description.remove();
  }

  if (features && features.length) {
    const popupFeatures = cardElement.querySelector('.popup__features');
    const popupFeatureList = popupFeatures.querySelectorAll('.popup__feature');

    popupFeatureList.forEach((popupFeatureListItem) => {
      const isAvailable = features.some(
        (feature) => popupFeatureListItem.classList.contains(`popup__feature--${feature}`),
      );

      if(!isAvailable) {
        popupFeatureListItem.remove();
      }
    });
  } else {
    features.remove();
  }

  const popupType = cardElement.querySelector('.popup__type');
  if (popupType) {
    popupType.textContent = accomodationTypes[type];
  } else {
    popupType.remove();
  }

  return cardElement;
};

mapCardBlock.append(getCard(createAdvertisments()[0]));

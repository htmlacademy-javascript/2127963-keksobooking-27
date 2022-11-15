const accomodationTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);

  const popupAvatar = cardElement.querySelector('.popup__avatar');
  const popupTitle = cardElement.querySelector('.popup__title');
  const popupAddress = cardElement.querySelector('.popup__text--address');
  const popupPrice = cardElement.querySelector('.popup__text--price');
  const popupCapacity = cardElement.querySelector('.popup__text--capacity');
  const popupTime = cardElement.querySelector('.popup__text--time');
  const popupPhotos = cardElement.querySelector('.popup__photos');
  const popupDescription = cardElement.querySelector('.popup__description');
  const popupFeatures = cardElement.querySelector('.popup__features');
  const popupType = cardElement.querySelector('.popup__type');

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

  const checkTextElementPresence = (popupElement, element) => {
    if (element && element.length) {
      popupElement.textContent = element;
    } else {
      popupElement.remove();
    }
  };

  if (author.avatar) {
    popupAvatar.src = author.avatar;
  } else {
    popupAvatar.remove();
  }

  checkTextElementPresence(popupTitle, title);

  checkTextElementPresence(popupAddress, address);

  if (price) {
    popupPrice.querySelector('[data-price]').textContent = price;
  } else {
    popupPrice.remove();
  }

  if (rooms && guests) {
    popupCapacity.textContent = `${rooms} комнаты для ${guests} гостей`;
  } else {
    popupCapacity.remove();
  }

  if (checkin && checkout) {
    popupTime.querySelector('[data-checkin]').textContent = checkin;
    popupTime.querySelector('[data-checkout]').textContent = checkout;
  } else {
    popupTime.remove();
  }

  if (photos && photos.length) {
    const popupPhoto = popupPhotos.querySelector('.popup__photo');
    popupPhotos.innerHtml = '';

    for (const photo of photos) {
      popupPhoto.src = photo;
      popupPhotos.append(popupPhoto);
    }
  } else {
    popupPhotos.remove();
  }

  checkTextElementPresence(popupDescription, description);

  if (features && features.length) {
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
    popupFeatures.remove();
  }

  if (type) {
    popupType.textContent = accomodationTypes[type];
  } else {
    popupType.remove();
  }

  return cardElement;
};

export { getCard };

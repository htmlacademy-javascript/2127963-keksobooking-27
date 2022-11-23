const OFFERS_NUMBER = 10;
const PRICE_VALUE = {
  min: 10000,
  max: 50000,
};
const filterElement = document.querySelector('.map__filters');
const typeFilterField = filterElement.querySelector('[name="housing-type"]');
const priceFilterField = filterElement.querySelector('[name="housing-price"]');
const roomsFilterField = filterElement.querySelector('[name="housing-rooms"]');
const guestsFilterField = filterElement.querySelector('[name="housing-guests"]');
const featuresCheckboxes = filterElement.querySelectorAll('.map__checkbox');

const filterByType = (offer) => typeFilterField.value === 'any' || offer.offer.type === typeFilterField.value;

const filterByPrice = (offer) => {
  switch (priceFilterField.value) {
    case 'any':
      return true;
    case 'low':
      return offer.offer.price <= PRICE_VALUE.min;
    case 'middle':
      return offer.offer.price > PRICE_VALUE.min && offer.offer.price <= PRICE_VALUE.max;
    case 'high':
      return offer.offer.price > PRICE_VALUE.max;
  }
};

const filterByRooms = (offer) =>
  roomsFilterField.value === 'any' || offer.offer.rooms === Number(roomsFilterField.value);

const filterByGuests = (offer) =>
  guestsFilterField.value === 'any' || offer.offer.guests === Number(guestsFilterField.value);

const filterByFeatures = (offer, features) => {
  if (!features.length) {
    return true;
  }

  if (!offer.offer.features) {
    return false;
  }

  return features.every((feature) => offer.offer.features.includes(feature));
};

const filterOffers = (offers) => {
  const selectedFeatures = [];

  featuresCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedFeatures.push(checkbox.value);
    }
  });

  const filteredOffers = [];

  for (let i = 0; filteredOffers.length < OFFERS_NUMBER && i < offers.length; i++) {
    if (
      filterByType(offers[i]) &&
      filterByPrice(offers[i]) &&
      filterByRooms(offers[i]) &&
      filterByGuests(offers[i]) &&
      filterByFeatures(offers[i], selectedFeatures)
    ) {
      filteredOffers.push(offers[i]);
    }
  }
  return filteredOffers;
};

const resetFilters = () => {
  filterElement.reset();
};

export { filterOffers, resetFilters };

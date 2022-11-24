import { getData } from './api.js';
import './popup.js';
import { activatePage, disablePage, setAdFormSubmit, setAdFormReset } from './ad-form.js';
import { initMap, setOnMapLoad, setOnMainPinMove, setPins, setCoordinates } from './map.js';
import { filterOffers } from './filter.js';
import { debounce } from './util.js';
import './avatar.js';

const TIMEOUT_DELAY = 500;

const startCoordinate = {
  lat: 35.70611,
  lng: 139.79651,
};

disablePage();

setOnMapLoad(() => {
  setOnMainPinMove(setCoordinates);
  setCoordinates(startCoordinate);
  activatePage();
  getData((offers) => {
    setPins(filterOffers(offers));
  });
});


initMap(startCoordinate);

setAdFormReset(startCoordinate);
setAdFormSubmit(startCoordinate);


const filterElement = document.querySelector('.map__filters');

const setOnPinsChange = debounce(setPins, TIMEOUT_DELAY);
const onFilterChange = () => {
  getData((offers) => {
    setOnPinsChange(filterOffers(offers));
  });
};

filterElement.addEventListener('change', onFilterChange);

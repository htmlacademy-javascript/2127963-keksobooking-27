import { getData } from './api.js';
import './popup.js';
import { activatePage, disablePage, onSubmitButton, onResetButton } from './ad-form.js';
import { initMap, setOnMapLoad, setOnMainPinMove, setPins, setCoordinates } from './map.js';
import { filterOffers } from './filter.js';
import { debounce } from './util.js';

const START_COORDINATE = {
  lat: 35.70611,
  lng: 139.79651,
};

const TIMEOUT_DELAY = 500;

disablePage();

setOnMapLoad(() => {
  setOnMainPinMove(setCoordinates);
  setCoordinates(START_COORDINATE);
  activatePage();
  getData((offers) => {
    setPins(filterOffers(offers));
  });
});


initMap(START_COORDINATE);

onResetButton(START_COORDINATE);
onSubmitButton(START_COORDINATE);


const filterElement = document.querySelector('.map__filters');

const setOnPinsChange = debounce(setPins, TIMEOUT_DELAY);
const onFilterChange = () => {
  getData((offers) => {
    setOnPinsChange(filterOffers(offers));
  });
};

filterElement.addEventListener('change', onFilterChange);

import {getData} from './api.js';
import './popup.js';
import { activatePage, disablePage, onSubmitButton, resetPage } from './ad-form.js';
import { initMap, setOnMapLoad, setOnMainPinMove, setPins, setCoordinates } from './map.js';


const START_COORDINATE = {
  lat: 35.70611,
  lng: 139.79651,
};
const resetButton = document.querySelector('.ad-form__reset');

disablePage();

setOnMapLoad(() => {
  setOnMainPinMove(setCoordinates);
  setCoordinates(START_COORDINATE);
  activatePage();
  getData((offers) => {
    setPins(offers);
  });
});


initMap(START_COORDINATE);

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage(START_COORDINATE);
});

onSubmitButton(START_COORDINATE);

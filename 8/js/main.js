import {getData} from './api.js';
import './popup.js';
import { activatePage, disablePage, resetForm, resetSlider, onSubmitButton } from './ad-form.js';
import { initMap, setOnMapLoad, setOnMainPinMove, setPins, setCoordinates, resetMap } from './map.js';


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

const resetPage = () => {
  resetForm();
  resetMap(START_COORDINATE);
  resetSlider();
};

resetButton.addEventListener('click', () => {
  resetPage(START_COORDINATE);
});

onSubmitButton(START_COORDINATE);

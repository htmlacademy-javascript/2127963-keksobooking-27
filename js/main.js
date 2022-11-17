//import {createAdvertisments} from './create-advertisments.js';
import {getData} from './api.js';
import './popup.js';
import { activatePage, disablePage} from './ad-form.js';
import { initMap, setOnMapLoad, setOnMainPinMove, setPins, setCoordinates, resetPage } from './map.js';

const START_COORDINATE = {
  lat: 35.70611,
  lng: 139.79651,
};
//const offers = createAdvertisments();

disablePage();

setOnMapLoad(() => {
  setOnMainPinMove(setCoordinates);
  setCoordinates(START_COORDINATE);
  activatePage();
  getData((offers) => {
    setPins(offers);
  });
  //setPins(offers);
});


initMap(START_COORDINATE);

resetPage(START_COORDINATE);

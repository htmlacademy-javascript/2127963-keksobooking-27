import { getCard } from './popup.js';

const MAP_SCALE = 10;
const DIGIT_NUMBER = 5;

const addressField = document.querySelector('#address');

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: 0,
    lng: 0,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const initMap = (coordinates) => {
  map.setView(coordinates, MAP_SCALE);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPinMarker.setLatLng(coordinates);

  mainPinMarker.addTo(map);
};

const createPinMarkers = (offers) => {
  offers.forEach((offer) => {
    const marker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon,
      },
    );
    marker.addTo(markerGroup).bindPopup(getCard(offer));
  });
};

const setPins = (offers) => {
  markerGroup.clearLayers();
  createPinMarkers(offers);
};

const setOnMapLoad = (cb) => {
  map.on('load', cb);
};

const setOnMainPinMove = (cb) => {
  mainPinMarker.on('move', (evt) => cb(evt.target.getLatLng()));
};

const setCoordinates = (coordinates) => {
  addressField.value = `${(coordinates.lat).toFixed(DIGIT_NUMBER)}, ${(coordinates.lng).toFixed(DIGIT_NUMBER)}`;
};

const resetMap = (coordinates) => {
  mainPinMarker.setLatLng(coordinates);

  map.setView(coordinates, MAP_SCALE);
};

export { initMap, setOnMapLoad, setOnMainPinMove, setPins, setCoordinates, resetMap };

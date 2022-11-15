import { getCard } from './popup.js';

const OFFERS_NUMBER = 10;

const addressField = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

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

const initMap = (coordinate) => {
  map.setView(coordinate, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPinMarker.setLatLng(coordinate);

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
  createPinMarkers(offers.slice(0, OFFERS_NUMBER));
};

const setOnMapLoad = (cb) => {
  map.on('load', cb);
};

const setOnMainPinMove = (cb) => {
  mainPinMarker.on('move', (evt) => cb(evt.target.getLatLng()));
};

const setCoordinates = (coordinates) => {
  addressField.value = `${(coordinates.lat).toFixed(5)}, ${(coordinates.lng).toFixed(5)}`;
};

const resetPage = (coordinates) => {resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(coordinates);

  map.setView(coordinates, 10);
});
};

export { initMap, setOnMapLoad, setOnMainPinMove, setPins, setCoordinates, resetPage};

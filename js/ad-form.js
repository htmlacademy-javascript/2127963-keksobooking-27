const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');


const disablePage = () => {
  adForm.classList.add('ad-form--disabled');
  const fieldsets = adForm.querySelectorAll('fieldset');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  mapForm.classList.add('map__filters--disabled');
  for (const child of mapForm.children) {
    child.disabled = true;
  }
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  const fieldsets = adForm.querySelectorAll('fieldset');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  mapForm.classList.remove('map__filters--disabled');
  for (const child of mapForm.children) {
    child.disabled = false;
  }
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help',
},
true
);

// Валидация количества комнат и гостей
const roomsField = adForm.querySelector('[name="rooms"]');
const capacityField = adForm.querySelector('[name="capacity"]');

const roomsOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

function validateCapacity () {
  return roomsOption[roomsField.value].includes(capacityField.value);
}
function getCapacityErrorMessage () {
  return 'Вариант недоступен для выбранного количества комнат';
}

function getRoomsErrorMessage () {
  return 'Вариант недоступен для выбранного количества гостей';
}

function onCapacityChange () {
  pristine.validate(capacityField);
  pristine.validate(roomsField);
}

function onRoomsChange () {
  pristine.validate(capacityField);
  pristine.validate(roomsField);
}

pristine.addValidator(roomsField, validateCapacity, getRoomsErrorMessage);
pristine.addValidator(capacityField, validateCapacity, getCapacityErrorMessage);

roomsField.addEventListener('change', onRoomsChange);
capacityField.addEventListener('change', onCapacityChange);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

disablePage();
activatePage();

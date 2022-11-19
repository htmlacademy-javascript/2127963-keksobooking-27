import { isEscapeKey } from './util.js';

const ALERT_SHOW_TIME = 5000;

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const errorButton = errorTemplate.querySelector('.error_button');

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  document.body.append(successMessage);
  const closeSuccessMessage = () => {
    successMessage.remove();
    document.removeEventListener('keydown', onEscKeydown);
  };
  function onEscKeydown () {
    if (isEscapeKey) {
      closeSuccessMessage();
    }
  }
  successMessage.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const closeErrorMessage = () => {
    errorMessage.remove();
    document.removeEventListener('keydown', onEscKeydown);
  };
  function onEscKeydown () {
    if (isEscapeKey) {
      closeErrorMessage();
    }
  }
  errorMessage.addEventListener('click', closeErrorMessage);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', onEscKeydown);
};


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert, showErrorMessage, showSuccessMessage };
//export {showAlert};

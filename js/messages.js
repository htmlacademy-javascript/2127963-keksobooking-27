const ALERT_SHOW_TIME = 5000;
/*const isEscapeKey = (evt) => evt.key === 'Escape';

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const renderMessage = (template) => {
  const modalTemplate = template.cloneNode(true);
  document.body.append(modalTemplate);
  const closeModal = () => {
    modalTemplate.remove();
    document.removeEventListener('keydown', onEscKeydown);
  };
  function onEscKeydown () {
    if (isEscapeKey) {
      closeModal();
    }
  }
  modalTemplate.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => renderMessage(errorTemplate);
const showSuccessMessage = () => renderMessage(successTemplate);
*/

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

//export {showAlert, showErrorMessage, showSuccessMessage};
export {showAlert};

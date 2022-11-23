const DEFAULT_AVATAR = 'img/muffin-grey.svg';
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarFileChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const photoFileChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoPreviewContainer = document.querySelector('.ad-form__photo');


avatarFileChooser.addEventListener('change', () => {
  const avatarFile = avatarFileChooser.files[0];
  const avatarFileName = avatarFile.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => avatarFileName.endsWith(it));
  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatarFile);
  }
});

photoFileChooser.addEventListener('change', () => {
  const roomFile = photoFileChooser.files[0];
  const roomFileName = roomFile.name.toLowerCase();
  const isMatching = FILE_TYPES.some((it) => roomFileName.endsWith(it));
  if (isMatching) {
    photoPreviewContainer.innerHTML = '';
    const roomPreview = document.createElement('img');
    roomPreview.alt = 'Фотография объекта.';
    roomPreview.style.width = '100%';
    roomPreview.style.height = '100%';
    roomPreview.style.objectFit = 'contain';
    photoPreviewContainer.append(roomPreview);
    roomPreview.src = URL.createObjectURL(roomFile);
  }
});


const clearPhotos = () => {
  photoPreviewContainer.innerHTML = '';
  avatarPreview.src = DEFAULT_AVATAR;
};

export { clearPhotos };

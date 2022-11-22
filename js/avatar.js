const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarFileChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

avatarFileChooser.addEventListener('change', () => {
  const avatarFile = avatarFileChooser.files[0];
  const avatarFileName = avatarFile.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => avatarFileName.endsWith(it));
  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatarFile);
  }
});

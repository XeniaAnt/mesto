const btnPopupOpen = document.querySelector('.profile__btn-edit');
const btnPopupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const profileNameInput = document.querySelector('.popup__name');
const profileDescriptionInput = document.querySelector('.popup__about-user');
const editForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__subtitle');

btnPopupOpen.addEventListener('click', openPopup);
btnPopupClose.addEventListener('click', closePopup);
editForm.addEventListener('submit', updateProfile)

function openPopup() {
  popup.classList.add('popup_opened');
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
  profileNameInput.value = '';
  profileDescriptionInput.value = '';
}

function updateProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

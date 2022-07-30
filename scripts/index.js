// массив фотокарточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const btnPopupOpen = document.querySelector('.profile__btn-edit'); // кнопка редактирования профиля
const btnPopupClose = document.querySelector('.popup__close'); // кнопка закрытия попапа
const popup = document.querySelector('.popup'); // попап
const profileNameInput = document.querySelector('.popup__input_value_name'); // инпут имени в  попапе
const profileDescriptionInput = document.querySelector('.popup__input_value_description'); //инпут описания в попапе
const editForm = document.querySelector('.popup__form'); // форма в попапе
const profileName = document.querySelector('.profile__name'); // имя в профиле на странице
const profileDescription = document.querySelector('.profile__subtitle'); // описание в профиле на странице
const photolist = document.querySelector('.photo__list'); // список фотокарточек
const photoitemTemplate = document.querySelector('.photo__item-template'); // шаблон фотокарточки

initialCards.forEach(function (element) { // перебор элементов в массиве
  const initialCard = photoitemTemplate.cloneNode(true).content; //клонируем шаблон фотокарточки в константу

  initialCard.querySelector('.photo__name').textContent = element.name; // меняем заголовок карточки
  initialCard.querySelector('.photo__img').src = element.link; // меняем атрибут ссылки на изменение карточки

  photolist.append(initialCard); // отображаем на странице
})


// функция открытия попапа
function openPopup() {
  popup.classList.add('popup_opened'); // добавляем класс popup_opened попапу для видимости
  profileNameInput.value = profileName.textContent; // заполняем инпут имени в попапе именем из профиля
  profileDescriptionInput.value = profileDescription.textContent; // заполняем инпут описания в попапе описанием из профиля
}

// функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened'); // удаляем класс popup_opened попапу для скрытия
  // profileNameInput.value = ''; // очищаем инпут имени в попапе
 // profileDescriptionInput.value = ''; // очищаем инпут описания в попапе
}

// функция обновления данных профиля из формы
function updateProfile(evt) {
  evt.preventDefault(); // сбрасываем событие отправки формы
  profileName.textContent = profileNameInput.value; // заполняем имя в профиле значением инпута имени из попапа
  profileDescription.textContent = profileDescriptionInput.value; // заполняем описание в профиле значением инпута описания из попапа
  closePopup(); //вызываем функцию закрытия попапа
}

btnPopupOpen.addEventListener('click', openPopup); // обработчик события клика по кнопке редактирования профиля
btnPopupClose.addEventListener('click', closePopup); // обработчик события клика по кнопке закрытия попапа
editForm.addEventListener('submit', updateProfile) // обработчик события отправки формы сохранения профиля

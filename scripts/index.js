const popup = document.querySelector(".popup"); // попап
const btnPopupOpen = document.querySelector(".profile__btn-edit"); // кнопка редактирования профиля
const btnPopupClose = popup.querySelector(".popup__close"); // кнопка закрытия попапа
const profileNameInput = document.querySelector(".popup__input_value_name"); // инпут имени в  попапе
//инпут описания в попапе
const profileDescriptionInput = document.querySelector(
  ".popup__input_value_description"
);
const editForm = document.querySelector(".popup__form"); // форма в попапе
const profileName = document.querySelector(".profile__name"); // имя в профиле на странице
const profileDescription = document.querySelector(".profile__subtitle"); // описание в профиле на странице
const photolist = document.querySelector(".photo__list"); // список фотокарточек
const photoitemTemplate = document.querySelector(".photo__item-template"); // шаблон фотокарточки
const popupCardAdd = document.querySelector(".popup_card-add"); // попап добавления карточки
const btnPopupCardAddOpen = document.querySelector(".profile__btn-add"); // кнопка добавления карточки
const btnPopupCardAddClose = popupCardAdd.querySelector(".popup__close"); // кнопка закрытия попапа добавления карточки
const cardNameInput = document.querySelector(".popup__input_value_header"); // инпут названия карточки в  попапе
const cardLinkInput = document.querySelector(".popup__input_value_link"); //инпут ссылки карточки в попапе
const editFormCardAdd = document.querySelector(".popup__form_card-add"); // форма в попапе

// массив фотокарточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//функция для отображения массива объектов на странице
initialCards.forEach(function (element) {
  addNewCard(element);
});

// функция открытия попапа
function openPopup() {
  popup.classList.add("popup_opened"); // добавляем класс popup_opened попапу для видимости
  profileNameInput.value = profileName.textContent; // заполняем инпут имени в попапе именем из профиля
  profileDescriptionInput.value = profileDescription.textContent; // заполняем инпут описания в попапе описанием из профиля
}

// функция закрытия попапа
function closePopup() {
  popup.classList.remove("popup_opened"); // удаляем класс popup_opened попапу для скрытия
}

// функция обновления данных профиля из формы
function updateProfile(evt) {
  evt.preventDefault(); // сбрасываем событие отправки формы
  profileName.textContent = profileNameInput.value; // заполняем имя в профиле значением инпута имени из попапа
  profileDescription.textContent = profileDescriptionInput.value; // заполняем описание в профиле значением инпута описания из попапа
  closePopup(); //вызываем функцию закрытия попапа
}

// функция открытия попапа для добавления карточки
function openPopupCardAdd() {
  popupCardAdd.classList.add("popup_opened"); // добавляем класс popup_opened попапу для видимости
}

// функция закрытия попапа  для добавления карточки
function closePopupCardAdd() {
  popupCardAdd.classList.remove("popup_opened"); // удаляем класс popup_opened попапу для скрытия
}

// функция добавления карточки на страницу
function cardAdd(evt) {
  evt.preventDefault(); // сбрасываем событие отправки формы

  // определяем объект карточки
  const element = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  //вызываем функцию доюавления карточки
  addNewCard(element);
  closePopupCardAdd(); //вызываем функцию закрытия попапа
}

//добавление новой карточки
function addNewCard(element) {
  const initialCard = photoitemTemplate.cloneNode(true).content; //клонируем шаблон фотокарточки в константу

  initialCard.querySelector(".photo__name").textContent = element.name; // меняем заголовок карточки
  initialCard.querySelector(".photo__img").src = element.link; // меняем атрибут ссылки на изменение карточки

  photolist.prepend(initialCard); // отображаем на странице
}

btnPopupOpen.addEventListener("click", openPopup); // обработчик события клика по кнопке редактирования профиля
btnPopupClose.addEventListener("click", closePopup); // обработчик события клика по кнопке закрытия попапа
editForm.addEventListener("submit", updateProfile); // обработчик события отправки формы сохранения профиля

btnPopupCardAddOpen.addEventListener("click", openPopupCardAdd); // обработчик события клика по кнопке редактирования профиля
btnPopupCardAddClose.addEventListener("click", closePopupCardAdd); // обработчик события клика по кнопке закрытия попапа
editFormCardAdd.addEventListener("submit", cardAdd); // обработчик события отправки формы сохранения профиля

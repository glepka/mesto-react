import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserInfo } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    if (!isLiked) {
      api
        .putLike(card._id)
        .then((newCard) => {
          setCards((cards) =>
            cards.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    } else {
      api
        .deleteLike(card._id)
        .then((newCard) => {
          setCards((cards) =>
            cards.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserInfo.Provider value={currentUser}>
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            selectedCard={selectedCard}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            closeAllPopups={closeAllPopups}
            cards={cards}
          />
          <Footer />
          <PopupWithForm
            name="new-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label className="form__field">
              <input
                type="url"
                id="user-pic-url-input"
                className="form__text"
                name="input-user-pic-url"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error user-pic-url-input-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="form__field">
              <input
                id="name-input"
                type="text"
                placeholder="Имя"
                className="form__text form__text_type_name"
                name="name"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="form__input-error name-input-error"></span>
            </label>
            <label className="form__field">
              <input
                id="profession-input"
                type="text"
                placeholder="О себе"
                className="form__text form__text_type_profession"
                name="profession"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="form__input-error profession-input-error"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            name="place"
            title="Новое место"
            buttonText="Сохранить"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="form__field">
              <input
                id="place-input"
                type="text"
                placeholder="Место"
                className="form__text form__text_type_place"
                name="place"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="form__input-error place-input-error"></span>
            </label>
            <label className="form__field">
              <input
                id="link-input"
                type="url"
                placeholder="Ссылка на картинку"
                className="form__text form__text_type_link"
                name="link"
                required
              />
              <span className="form__input-error link-input-error"></span>
            </label>
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <PopupWithForm
            name="delete-card"
            title="Вы уверены?"
            buttonText="Да"
          />
        </CurrentUserInfo.Provider>
      </div>
    </div>
  );
}

export default App;

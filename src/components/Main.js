import React from "react";
import pencil from "../images/pencil.svg";
import plus from "../images/plus.svg";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__user">
          <div className="profile__img-container" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          </div>

          <PopupWithForm
            name="new-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={props.isEditAvatarPopupOpen}
            onClose={props.closeAllPopups}
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

          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Изменить имя и профессию в описании профиля"
                onClick={props.onEditProfile}
              >
                <img src={pencil} alt="Карандаш" className="profile__icon" />
              </button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>

            <PopupWithForm
              name="profile"
              title="Редактировать профиль"
              buttonText="Сохранить"
              isOpen={props.isEditProfilePopupOpen}
              onClose={props.closeAllPopups}
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
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={props.onAddPlace}
        >
          <img src={plus} alt="Плюс" />
        </button>
        <PopupWithForm
          name="place"
          title="Новое место"
          buttonText="Сохранить"
          isOpen={props.isAddPlacePopupOpen}
          onClose={props.closeAllPopups}
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
      </section>

      <section className="elements page__elements">
        {cards.map((data) => (
          <Card key={data._id} data={data} onCardClick={props.onCardClick} />
        ))}
      </section>

      <ImagePopup card={props.selectedCard} onClose={props.closeAllPopups} />

      <PopupWithForm name="delete-card" title="Вы уверены?" buttonText="Да" />
    </main>
  );
}

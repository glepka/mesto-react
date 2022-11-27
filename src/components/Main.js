import React, { useContext } from "react";
import { CurrentUserInfo } from "../contexts/CurrentUserContext";
import pencil from "../images/pencil.svg";
import plus from "../images/plus.svg";
import Card from "./Card";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const user = useContext(CurrentUserInfo);

  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__user">
          <div className="profile__img-container" onClick={onEditAvatar}>
            <img src={user.avatar} alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{user.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Изменить имя и профессию в описании профиля"
                onClick={onEditProfile}
              >
                <img src={pencil} alt="Карандаш" className="profile__icon" />
              </button>
            </div>
            <p className="profile__subtitle">{user.abou}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={onAddPlace}
        >
          <img src={plus} alt="Плюс" />
        </button>
      </section>

      <section className="elements page__elements">
        {cards.map((data) => (
          <Card
            key={data._id}
            data={data}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

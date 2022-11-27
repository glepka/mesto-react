import React, { useContext } from "react";
import { CurrentUserInfo } from "../contexts/CurrentUserContext";

export default function Card({ data, onCardClick, onCardLike, onCardDelete }) {
  const user = useContext(CurrentUserInfo);
  const isOwn = data.owner._id === user._id;
  const isLiked = data.likes.some((i) => i._id === user._id);
  const cardLikeButtonClassName = `${
    isLiked ? "elements__icon elements__icon_type_active" : "elements__icon"
  }`;

  const handleClick = () => {
    onCardClick(data);
  };

  const handleLikeClick = () => {
    onCardLike(data);
  };

  const handleTrashClick = () => {
    onCardDelete(data);
  };

  return (
    <div className="elements__element">
      {isOwn && (
        <button
          className="elements__trash"
          id="trash"
          onClick={handleTrashClick}
        ></button>
      )}

      <img
        className="elements__image"
        src={data.link}
        alt={data.name}
        onClick={handleClick}
      />
      <div className="elements__description">
        <h2 className="elements__title">{data.name}</h2>
        <div className="elements__like-container">
          <button
            className={cardLikeButtonClassName}
            id="like"
            onClick={handleLikeClick}
          ></button>
          <span className="elements__like-counter">{data.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

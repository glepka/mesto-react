export default function Card({ data, onCardClick }) {
  function handleClick() {
    onCardClick(data);
  }

  return (
    <div className="elements__element">
      <div className="elements__trash"></div>
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
            className="elements__icon"
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <span className="elements__like-counter">{data.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

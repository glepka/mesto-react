export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.data);
  }

  return (
    <div className="elements__element">
      <div className="elements__trash"></div>
      <img
        className="elements__image"
        src={props.data.link}
        alt={props.data.name}
        onClick={handleClick}
      />
      <div className="elements__description">
        <h2 className="elements__title">{props.data.name}</h2>
        <div className="elements__like-container">
          <button
            className="elements__icon"
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <span className="elements__like-counter">
            {props.data.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

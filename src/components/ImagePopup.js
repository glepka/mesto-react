export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card && "popup_opened"}`}>
      <div className="popup__image-container">
        <button
          className="popup__cross"
          aria-label="Закрыть форму"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup__image-text">{props.card.name}</p>
      </div>
    </div>
  );
}

export default function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} 
      ${props.isOpen && "popup_opened"}`}
    >
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <form className="form" name={props.name} autoComplete="off" noValidate>
          {props.children}
          <button className="form__submit-btn" type="submit">
            {props.buttonText}
          </button>
        </form>
        <button
          className="popup__cross"
          type="button"
          aria-label="Закрыть форму."
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

<div className="popup popup_type_delete-card"></div>;

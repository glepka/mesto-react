export default function PopupWithForm({
  name,
  title,
  children,
  buttonText,
  onClose,
  isOpen,
  onSubmit,
  isLoading,
}) {
  const handlerOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`popup popup_type_${name} 
      ${isOpen && "popup_opened"}`}
      onClick={handlerOverlayClick}
    >
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form
          className="form"
          name={name}
          autoComplete="off"
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="form__submit-btn"
            type="submit"
            disabled={isLoading}
          >
            {buttonText}
          </button>
        </form>
        <button
          className="popup__cross"
          type="button"
          aria-label="Закрыть форму."
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

<div className="popup popup_type_delete-card"></div>;

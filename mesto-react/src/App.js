import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="page__container">
        <header class="header page__header">
          <img
            src="<%=require('./images/logo.svg')%>"
            class="header__logo"
            alt="Логотип"
          />
        </header>
        <main>
          <section class="profile page__profile">
            <div class="profile__user">
              <img
                src="<%=require('./images/avatar.jpg')%>"
                alt="Аватар"
                class="profile__avatar"
              />
              <div class="profile__info">
                <div class="profile__title">
                  <h1 class="profile__name">Жак-Ив Кусто</h1>
                  <button
                    class="profile__edit-button"
                    type="button"
                    aria-label="Изменить имя и профессию в описании профиля"
                  >
                    <img
                      src="<%=require('./images/pencil.svg')%>"
                      alt="Карандаш"
                      class="profile__icon"
                    />
                  </button>
                </div>
                <p class="profile__subtitle">Исследователь океана</p>
              </div>
            </div>
            <button
              class="profile__add-button"
              type="button"
              aria-label="Добавить карточку"
            >
              <img src="<%=require('./images/plus.svg')%>" alt="Плюс" />
            </button>
          </section>
          <section class="elements page__elements"></section>
        </main>
        <footer class="page__footer footer">
          <p class="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
        <div class="popup popup_type_profile">
          <div class="popup__container">
            <button
              class="popup__cross popup__cross_type_profile"
              aria-label="Закрыть форму"
              type="button"
            ></button>
            <form
              class="form form-profile"
              name="profile-form"
              method="post"
              novalidate
            >
              <h2 class="form__title">Редактировать профиль</h2>
              <label class="form__field">
                <input
                  id="name-input"
                  type="text"
                  placeholder="Имя"
                  class="form__text form__text_type_name"
                  name="name"
                  required
                  minlength="2"
                  maxlength="40"
                />
                <span class="form__input-error name-input-error"></span>
              </label>
              <label class="form__field">
                <input
                  id="profession-input"
                  type="text"
                  placeholder="О себе"
                  class="form__text form__text_type_profession"
                  name="profession"
                  required
                  minlength="2"
                  maxlength="200"
                />
                <span class="form__input-error profession-input-error"></span>
              </label>
              <button
                type="submit"
                class="form__submit-btn form__submit-btn_action_save"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div class="popup popup_type_place">
          <div class="popup__container">
            <button
              class="popup__cross"
              aria-label="Закрыть форму"
              type="button"
            ></button>
            <form
              class="form form-place"
              name="place-form"
              method="post"
              novalidate
            >
              <h2 class="form__title">Новое место</h2>

              <label class="form__field">
                <input
                  id="place-input"
                  type="text"
                  placeholder="Место"
                  class="form__text form__text_type_place"
                  name="place"
                  required
                  minlength="2"
                  maxlength="30"
                />
                <span class="form__input-error place-input-error"></span>
              </label>
              <label class="form__field">
                <input
                  id="link-input"
                  type="url"
                  placeholder="Ссылка на картинку"
                  class="form__text form__text_type_link"
                  name="link"
                  required
                />
                <span class="form__input-error link-input-error"></span>
              </label>
              <button
                type="submit"
                class="form__submit-btn form__submit-btn_action_create"
              >
                Создать
              </button>
            </form>
          </div>
        </div>
        <div class="popup popup_type_image">
          <div class="popup__image-container">
            <button
              class="popup__cross"
              aria-label="Закрыть форму"
              type="button"
            ></button>
            <img class="popup__image" />
            <p class="popup__image-text"></p>
          </div>
        </div>
      </div>

      <template class="card card-template_type_default">
        <div class="elements__element">
          <div class="elements__trash"></div>
          <img class="elements__image" />
          <div class="elements__description">
            <h2 class="elements__title"></h2>
            <button
              class="elements__icon"
              type="button"
              aria-label="Поставить лайк"
            ></button>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;

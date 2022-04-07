import React from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from '../ImagePopup/ImagePopup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

import api from '../../utils/Api';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handlePopupClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('меня нажали', e)
    closeAllPopups()
  }

  return (
    <div className="App">
      <div className="page">
        <div className="container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handlePopupClick}
          />
          <Footer />
          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onEditAvatar={handleEditAvatarClick}
            name="profile-photo"
            title="Обновить аватар"
            onClose={closeAllPopups}
            onSubmitForm={handleSubmitForm}>
            <fieldset className="pop-up__fieldset">
              <label className="pop-up__field">
                <input type="url" id="avatar-input" defaultValue="" placeholder="Ссылка на аватар" name="avatar"
                  className="pop-up__input pop-up__input_type_profile-photo-link" required />
                <span id="avatar-input-error" className="pop-up__input-error"></span>
              </label>
              <button type="submit" className="pop-up__button button">Сохранить</button>
            </fieldset>
          </PopupWithForm>
          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onEditProfile={handleEditProfileClick}
            name="place_title"
            title="Редактировать профиль"
            onClose={closeAllPopups}
            onSubmitForm={handleSubmitForm} >
            <fieldset className="pop-up__fieldset">
              <label className="pop-up__field">
                <input type="text" id="name-input" defaultValue="" placeholder="Имя" name="name"
                  className="pop-up__input pop-up__input_type_name" minLength="2" maxLength="40" required />
                <span id="name-input-error" className="pop-up__input-error"></span>
              </label>
              <label className="pop-up__field">
                <input type="text" id="job-input" defaultValue="" placeholder="Описание" name="about"
                  className="pop-up__input pop-up__input_type_job" minLength="2" maxLength="200" required />
                <span id="job-input-error" className="pop-up__input-error"></span>
              </label>
              <button type="submit" className="pop-up__button button">Сохранить</button>
            </fieldset>
          </PopupWithForm>
          <PopupWithForm
            onAddPlace={handleAddPlaceClick}
            isOpen={isAddPlacePopupOpen}
            name="place_card"
            title="Новое место"
            onClose={closeAllPopups}
            onSubmitForm={handleSubmitForm}
          >
            <fieldset className="pop-up__fieldset">
              <label className="pop-up__field">
                <input type="text" id="place-input" defaultValue="" placeholder="Название" name="name"
                  className="pop-up__input pop-up__input_type_place" minLength="2" maxLength="30" required />
                <span id="place-input-error" className="pop-up__input-error"></span>
              </label>
              <label className="pop-up__field">
                <input type="url" id="link-input" defaultValue="" placeholder="Ссылка на картинку" name="link"
                  className="pop-up__input pop-up__input_type_link" required />
                <span id="link-input-error" className="pop-up__input-error"></span>
              </label>
              <button type="submit" className="pop-up__button button">Сохранить</button>
            </fieldset>
          </PopupWithForm>
          <ImagePopup
            name="place_fullsize-photo"
            card={selectedCard}
            onClose={closeAllPopups}
            isOpen={isImagePopupOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

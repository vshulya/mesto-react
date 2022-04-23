import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  // Обработчик изменения инпута обновляет стейт
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmitForm={handleSubmit}
      name="place_title"
      title="Редактировать профиль"
    >
      <label className="pop-up__field">
        <input type="text" defaultValue={name} onChange={handleNameChange} placeholder="Имя" id="name-input" name="name"
          className="pop-up__input pop-up__input_type_name" minLength="2" maxLength="40" required />
        <span id="name-input-error" className="pop-up__input-error"></span>
      </label>
      <label className="pop-up__field">
        <input type="text" defaultValue={description} onChange={handleDescriptionChange} id="job-input" placeholder="Описание" name="about"
          className="pop-up__input pop-up__input_type_job" minLength="2" maxLength="200" required />
        <span id="job-input-error" className="pop-up__input-error"></span>
      </label>
    </PopupWithForm>)
}

export default EditProfilePopup;
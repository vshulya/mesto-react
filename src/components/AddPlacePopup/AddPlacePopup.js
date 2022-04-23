import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');


  // Обработчик изменения инпута обновляет стейт
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name,
      link,
    }).then(res => {
      setName('')
      setLink('')
    });
  }

  return (
    <PopupWithForm
      name="place_card"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmitForm={handleSubmit}
      // onAddPlace={handleAddPlaceClick}
      title="Новое место"
    >
      <label className="pop-up__field">
        <input type="text" id="place-input" value={name} onChange={handleNameChange} placeholder="Название" name="name"
          className="pop-up__input pop-up__input_type_place" minLength="2" maxLength="30" required />
        <span id="place-input-error" className="pop-up__input-error"></span>
      </label>
      <label className="pop-up__field">
        <input type="url" id="link-input" value={link} onChange={handleLinkChange} placeholder="Ссылка на картинку" name="link"
          className="pop-up__input pop-up__input_type_link" required />
        <span id="link-input-error" className="pop-up__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
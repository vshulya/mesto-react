import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function EditAvatarPopup(props) {
  const changeAvatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: changeAvatar.current.value,
    });
    changeAvatar.current.value = "";
  }

  return (
    <PopupWithForm
      name="profile-photo"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmitForm={handleSubmit}
      title="Обновить аватар">
      <label className="pop-up__field">
        <input type="url" ref={changeAvatar} placeholder="Ссылка на аватар" name="avatar"
          className="pop-up__input pop-up__input_type_profile-photo-link" required />
        <span id="avatar-input-error" className="pop-up__input-error"></span>
      </label>
    </PopupWithForm>)

}

export default EditAvatarPopup;
import React from 'react';
function PopupWithForm(props) {

  const defaultButtonText = 'Сохранить';
  const buttonText = props.buttonText ?? defaultButtonText;

  return (
    <section className={`pop-up pop-up_place_${props.name} ${props.isOpen && "pop-up_opened"}`} >
      <div className="pop-up__container">
        <button onClick={props.onClose} type="button" className="pop-up__close button"></button>
        <h2 className="pop-up__title">{props.title}</h2>
        <form onSubmit={props.onSubmitForm} name={props.name} className="pop-up__form">
          <fieldset className="pop-up__fieldset">
            {props.children}
            <button type="submit" className="pop-up__button button">{buttonText}</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
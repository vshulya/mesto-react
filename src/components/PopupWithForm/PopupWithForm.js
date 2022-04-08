import React from 'react';
function PopupWithForm(props) {

  React.useEffect(() => {
    const popup = document.querySelector(`.pop-up_place_${props.name}`);
    if (props.isOpen) {
      popup.classList.add('pop-up_opened');
    }
    else {
      popup.classList.remove('pop-up_opened');
    }
  }, [props.isOpen]);



  return (
    <div className="PopupWithForm">
      <section className={`pop-up pop-up_place_${props.name} `} >
        <div className="pop-up__container">
          <button onClick={props.onClose} type="button" className="pop-up__close button"></button>
          <h2 className="pop-up__title">{props.title}</h2>
          <form onSubmit={props.onSubmitForm} noValidate name={props.name} className="pop-up__form">
            {props.children}
          </form>
        </div>
      </section>
    </div>
  );
}

export default PopupWithForm;
import React from 'react';

function ImagePopup(props) {

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
    <div className="ImagePopup">
      <section className={`pop-up pop-up_place_${props.name} `} >
        <figure className="pop-up__photo-container">
          <button onClick={props.onClose} type="button" className="pop-up__close button"></button>
          <img className="pop-up__fullsize-photo" alt={props.card.name} src={props.card.link} onClick={props.onClose} />
          <figcaption className="pop-up__figcaption">{props.card.name}</figcaption>
        </figure>
      </section>
    </div>
  );
}

export default ImagePopup;
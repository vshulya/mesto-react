import React from 'react';

function ImagePopup(props) {

  return (
    <section className={`pop-up pop-up_place_${props.name} ${props.isOpen && "pop-up_opened"}`} >
      <figure className="pop-up__photo-container">
        <button onClick={props.onClose} type="button" className="pop-up__close button"></button>
        <img className="pop-up__fullsize-photo" alt={props.card.name} src={props.card.link} onClick={props.onClose} />
        <figcaption className="pop-up__figcaption">{props.card.name}</figcaption>
      </figure>
    </section >
  );
}

export default ImagePopup;
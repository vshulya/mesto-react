import React from 'react';

function ImagePopup(props) {

  React.useEffect(() => {
    if (props.isOpen) {
      document.querySelector(`.pop-up_place_${props.name}`).classList.add('pop-up_opened');
    }
    else {
      document.querySelector(`.pop-up_place_${props.name}`).classList.remove('pop-up_opened');
    }
  }, [props.isOpen]);

  return (
    <div className="ImagePopup">
      <section className={`pop-up pop-up_place_${props.name} `} >
        <figure className="pop-up__photo-container">
          <button onClick={props.onClose} type="button" className="pop-up__close button"></button>
          <img className="pop-up__fullsize-photo" alt={props.name} src={props.link} onClick={props.onClose} />
          <figcaption className="pop-up__figcaption">{props.name}</figcaption>
        </figure>
      </section>
    </div>
  );
}

export default ImagePopup;
function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button type="button" className="card__delete-button button"></button>
      <img onClick={handleClick} alt={props.name} src={props.link} className="card__image" />
      <div className="card__description">
        <h2 className="card__text">{props.name}</h2>
        <div className="card__likes">

          <button type="button" className="card__like button">{props.likes.length}
          </button>
          <span className="card__likes-number"></span>
        </div>
      </div>
    </li>
  )
}

export default Card;

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button type="button" className="card__delete-button button"></button>
      <img onClick={handleClick} alt={props.card.name} src={props.card.link} className="card__image" />
      <div className="card__description">
        <h2 className="card__text">{props.card.name}</h2>
        <div className="card__likes">

          <button type="button" className="card__like button">
          </button>
          <span className="card__likes-number">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;

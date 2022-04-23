import logo from '../../images/logo.svg';
import api from '../../utils/Api';
import Card from '../Card/Card';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  // React.useEffect(() => {
  //   api
  //     .getProfile()
  //     .then(profile => {
  //       setUserName(profile.name);
  //       setUserDescription(profile.about);
  //       setUserAvatar(profile.avatar);
  //     })
  //     .catch(err => console.log(err));
  // }, []);


  React.useEffect(() => {
    api.getInitialCards()
      .then(setCards)
      .catch(err => {
        console.log(err)
      })
  }, [])


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    isLiked ?
      api.deleteLike(card._id)
        .then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
        .catch(err => console.log(err)) :
      api.addLike(card._id)
        .then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
        .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;

    if (isOwn) {
      api.deleteCard(card._id)
        .then(() => setCards(state => state.filter(c => c._id != card._id)))
        .catch(err => console.log(err))
    }
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <div onClick={props.onEditAvatar} className="profile__image-button">
            <div className="profile__image" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__text">{currentUser.about}</p>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button button">
            </button>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button button">
        </button>
      </section>
      <section className="cards">
        <ul className="cards-list">
          {cards.map(card => (
            <Card
              card={card}
              onCardClick={props.onCardClick}
              name={card.name}
              link={card.link}
              likes={card.likes}
              key={card._id}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete} />))}
        </ul>
      </section>
    </main>

  );
}

export default Main;
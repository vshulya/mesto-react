import logo from '../../images/logo.svg';
import api from '../../utils/Api';
import Card from '../Card/Card';
import React from 'react';
function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfile()
      .then(profile => {
        setUserName(profile.name);
        setUserDescription(profile.about);
        setUserAvatar(profile.avatar);
      })
      .catch(err => console.log(err));
  }, []);


  React.useEffect(() => {
    api.getInitialCards()
      .then(setCards)
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <div onClick={props.onsetUserAvatar} className="profile__image-button"><div className="profile__image" style={{ backgroundImage: `url(${userAvatar})` }}></div></div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__text">{userDescription}</p>
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
              key={card._id} />))}
        </ul>
      </section>
    </main>

  );
}

export default Main;
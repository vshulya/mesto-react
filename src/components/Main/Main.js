import logo from '../../images/logo.svg';
import api from '../../utils/Api';
import Card from '../Card/Card';
import React from 'react';
function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, editAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  // const [userProfile, setUserProfile] = React.useState(null);

  React.useEffect(() => {
    api
      .getProfile()
      .then(profile => {
        setUserName(profile.name);
        setUserDescription(profile.about);
        editAvatar(profile.avatar);
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
    <div className="Main">
      <div className="content">
        <section className="profile">
          <div className="profile__avatar">
            <div onClick={props.onEditAvatar} className="profile__image-button"><div className="profile__image" style={{ backgroundImage: `url(${userAvatar})` }}></div></div>
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

        {/* <section className="pop-up pop-up_place_profile-photo">
          <div className="pop-up__container">
            <button type="button" className="pop-up__close button"></button>
            <h2 className="pop-up__title">Обновить аватар</h2>

            {/* <!--FORM3--> 
            <form action="submit" noValidate name="profile-photo-form" className="pop-up__form">
              <fieldset className="pop-up__fieldset">
                <label className="pop-up__field">
                  <input type="url" id="avatar-input" defaultValue="" placeholder="Ссылка на аватар" name="avatar"
                    className="pop-up__input pop-up__input_type_profile-photo-link" required />
                  <span id="avatar-input-error" className="pop-up__input-error"></span>
                </label>
                <button type="submit" className="pop-up__button button" disabled>Сохранить</button>
              </fieldset>
            </form>
          </div>
        </section> */}
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

        {/* <section className="pop-up pop-up_place_title">
          <div className="pop-up__container">
            <button type="button" className="pop-up__close button"></button>
            <h2 className="pop-up__title">Редактировать профиль</h2>

            {/* <!--FORM1--> 
            <form action="submit" noValidate name="edit-profile-form" className="pop-up__form">
              <fieldset className="pop-up__fieldset">
                <label className="pop-up__field">
                  <input type="text" id="name-input" defaultValue="" placeholder="Имя" name="name"
                    className="pop-up__input pop-up__input_type_name" minLength="2" maxLength="40" required />
                  <span id="name-input-error" className="pop-up__input-error"></span>
                </label>
                <label className="pop-up__field">
                  <input type="text" id="job-input" defaultValue="" placeholder="Описание" name="about"
                    className="pop-up__input pop-up__input_type_job" minLength="2" maxLength="200" required />
                  <span id="job-input-error" className="pop-up__input-error"></span>
                </label>
                <button type="submit" className="pop-up__button button" disabled>Сохранить</button>
              </fieldset>
            </form>
          </div>
        </section> */}

        {/* <section className="pop-up pop-up_place_card">
          <div className="pop-up__container">
            <button type="button" className="pop-up__close button"></button>
            <h2 className="pop-up__title">Новое место</h2>

            {/* <!--FORM2-->
            <form action="submit" noValidate name="add-card-form" className="pop-up__form">
              <fieldset className="pop-up__fieldset">
                <label className="pop-up__field">
                  <input type="text" id="place-input" defaultValue="" placeholder="Название" name="name"
                    className="pop-up__input pop-up__input_type_place" minLength="2" maxLength="30" required />
                  <span id="place-input-error" className="pop-up__input-error"></span>
                </label>
                <label className="pop-up__field">
                  <input type="url" id="link-input" defaultValue="" placeholder="Ссылка на картинку" name="link"
                    className="pop-up__input pop-up__input_type_link" required />
                  <span id="link-input-error" className="pop-up__input-error"></span>
                </label>
                <button type="submit" className="pop-up__button button" disabled>Сохранить</button>
              </fieldset>
            </form>
          </div>
        </section> */}

        {/* <section className="pop-up pop-up_place_card-delete ">
          <div className="pop-up__container">
            <button type="button" className="pop-up__close button"></button>
            <h2 className="pop-up__title">Вы уверены?</h2>
            <form action="submit" noValidate name="delete-card-form" className="pop-up__form">
              <button type="submit" className="pop-up__button button">Да</button>
            </form>
          </div>
        </section> */}

      </div>

    </div>

  );
}

export default Main;
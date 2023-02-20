import React from 'react';
// import { useSelector } from 'react-redux';
import './Account.scss';

export default function Profile() {
  // const {user} = useSelector((store: RootState) => store.userState);

  return (
    <div className="user_card__container">
      <h3>Профиль</h3>
      <div className="user_card__body">
        <div className="user_card__content">
          <p className="user_card__content_text">
            <p className="user_card__content_title">
              User.id
            </p>
            <p className="user_card__content_name">
              User.name
            </p>
          </p>
          <img
            className="user_card__content_icon"
            src="/../../../logo/edit_logo.gif"
            alt="edit"
          />
        </div>
        <div className="user_card__content">
          <div className="user_card__content_text">
            <div className="user_card__content_title">Телефон</div>
            <div className="user_card__content_name">+7(921)999-11-10</div>
          </div>
          <img
            className="user_card__content_icon"
            src="/../../../logo/edit_logo.gif"
            alt="edit"
          />
        </div>
        <div className="user_card__content">
          <div className="user_card__content_text">
            <div className="user_card__content_title">Пароль</div>
            <div className="user_card__content_name">*******</div>
          </div>
          <img
            className="user_card__content_icon"
            src="/../../../logo/edit_logo.gif"
            alt="edit"
          />
        </div>
        <div className="user_card__content">
          <div className="user_card__content_text">
            <div className="user_card__content_title">Email</div>
            <div className="user_card__content_name">User@user.ru</div>
          </div>
          <img
            className="user_card__content_icon"
            src="/../../../logo/edit_logo.gif"
            alt="edit"
          />
        </div>
      </div>
    </div>
  );
}

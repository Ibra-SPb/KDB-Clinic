import React from 'react';

export default function Profile() {

  return (
    <div className="user_card_container">
      <div className="user_card_body">
        <div className="user_card_content">
          <div className="user_card_content_text">
            <div className="user_card_content_title"></div>
            <div className="user_card_content_name"></div>
          </div>
          <div className="user_card_content_icon"></div>
        </div>
        <div className="user_card_content">
          <div className="user_card_content_text">
            <div className="user_card_content_title">Телефон</div>
            <div className="user_card_content_name"></div>
          </div>
          <div className="user_card_content_icon"></div>
        </div>
        <div className="user_card_content">
          <div className="user_card_content_text">
            <div className="user_card_content_title">Пароль</div>
            <div className="user_card_content_name"></div>
          </div>
          <div className="user_card_content_icon"></div>
        </div>
        <div className="user_card_content">
          <div className="user_card_content_text">
            <div className="user_card_content_title">Email</div>
            <div className="user_card_content_name"></div>
          </div>
          <div className="user_card_content_icon"></div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './Footer.scss';

function Footer(): JSX.Element {
  return (
    <div className="footer center_footer">
      <div className="social_icons">
      <a href="https://telegram.org/">
        <img
          className="first_icon"
          src="/IMG/SVGICons/telegram.svg"
          alt="icon_image"
        />
      </a>
        <a href="https://www.youtube.com">
        <img
          className="second_icon"
          src="/IMG/SVGICons/youtube.svg"
          alt="icon_image"
        />
        </a>
        <a href="https://vk.com/">
        <img
          className="third_icon"
          src="/IMG/vk.png"
          alt="icon_image"
        />
        </a>
      </div>
      <div className="footer_title">
      <p> Телефон: +7(906) 777-77-77</p>
      <p> E-mail: info@klmclinic.ru</p>
      </div>
    </div>
  );
}

export default Footer;

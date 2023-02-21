import React from 'react';
import './Footer.scss';

function Footer(): JSX.Element {
  return (
    <div className="footer center_footer">
      <div className="social_icons">
        <img
          className="first_icon"
          src="/IMG/SVGICons/telegram.svg"
          alt="icon_image"
        />
        <img
          className="second_icon"
          src="/IMG/SVGICons/youtube.svg"
          alt="icon_image"
        />
        <img
          className="third_icon"
          src="/IMG/SVGICons/facebook.svg"
          alt="icon_image"
        />
      </div>
      <p className="footer_title"> Powered by Elbrus Bootcamp</p>
    </div>
  );
}

export default Footer;

import React from 'react';
import '../App.scss';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__line"></div>
      <div className="Footer__container">
        <div className="Footer__content">
          <div className="Footer__text">
            Проект ООО «Инитлаб», Краснодар, Россия. <br /> Drupal является
            зарегистрированной торговой маркой Dries Buytaert.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

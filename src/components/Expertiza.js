import React from 'react';
import '../App.scss';
import './Expertiza.scss';

function Expertiza() {
  return (
    <div className="Expertiza" id="Expertiza">
      <div className="Expertiza__wrapper" />
      <div className="Expertiza__contianer">
        <div className="Expertiza__inner">
          <div className="Expertiza__content">
            <h1 className="Expertiza__title">
              Экспертиза в Drupal, опыт 14 лет!
            </h1>
            <div className="Expertiza__group">
              <div className="Expertiza__group-text">
                Только системный подход – контроль версий, резервирование и
                тестирование!
              </div>
              <div className="Expertiza__group-text">
                Только Drupal сайты, не берем на поддержку сайты на других CMS!
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="Expertiza__img"
        src="images/laptop.png"
        alt="bg-druppal"
      />
    </div>
  );
}

export default Expertiza;

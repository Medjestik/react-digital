import React from 'react';
import './ProgramInfoPopup.css';
import Popup from '../Popup.js';

function ProgramInfoPopup({ isOpen, onClose, program }) {

  function onSubmit() {
    onClose();
  }

  return (
    <Popup
    isOpen={isOpen}
    onSubmit={onSubmit}
    formWidth={'large'}
    formName={'program-info-popup'}
    >

      <div className='program-info__top'>
        <img className='program-info__img' src={program.image} alt=' '></img>
        <div className='program-info__overlay'></div>
        <div className='program-info__container'>
          <span className='program-info__caption'>{program.type + ' | ' +program.form}</span>
          <h2 className='program-info__title font__family_macherie'>{program.title}</h2>
        </div>
      </div>

      <div className='program-info__bottom'>
        <div className='program-info__container'>
          <div className='program-info__list-item'>
            <h5 className='program-info__list-title'>Трудоемкость программы:</h5>
            <p className='program-info__list-text'>{program.difficultyLevel}</p>
          </div>
          <div className='program-info__list-item'>
            <h5 className='program-info__list-title'>Сроки освоения программы:</h5>
            <p className='program-info__list-text'>{program.time}</p>
          </div>
          <div className='program-info__list-item'>
            <h5 className='program-info__list-title'>Результаты обучения:</h5>
            <p className='program-info__list-text'>{program.description}</p>
          </div>

          <button className='popup__btn-back' type='button' onClick={onSubmit}>Назад</button>
        </div>
      </div>

      

    </Popup>
  )
}

export default ProgramInfoPopup;
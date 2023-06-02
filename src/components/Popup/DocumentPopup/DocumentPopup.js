import React from 'react';
import './DocumentPopup.css';
import Popup from '../Popup.js';
import { newPrograms } from '../../../utils/programs.js';

function DocumentPopup({ isOpen, onClose, onOpenProgram }) {

  function onSubmit() {
    onClose();
  }

  return (
    <Popup
    isOpen={isOpen}
    onSubmit={onSubmit}
    formWidth={'large'}
    formName={'document-popup'}
    >

      <div className='program-info__bottom'>
        <div className='program-info__container'>
          <h2 className='popup__title'>Консорциум «Цифровые кафедры</h2>

          <h4 className='popup__subtitle'>Список документов: </h4>
          <ul className='popup__list'>
            <li className='popup__item'>
              <a className='btn_type_download' target='_blank' rel='noreferrer' href='https://edu.emiit.ru/ivan/ck/1.pdf'> </a>
              <p className='popup__list-text'>Соглашение о создании Консорциума</p>
            </li>
            <li className='popup__item'>
              <a className='btn_type_download' target='_blank' rel='noreferrer' href='https://edu.emiit.ru/ivan/ck/2.docx'> </a>
              <p className='popup__list-text'>Согласие на присоединение к Консорциуму</p>
            </li>
          </ul>

          <h4 className='popup__subtitle'>Программы для реализации в 2023/2024 году: </h4>
          <ul className='popup__list'>
            <li className='popup__item'>
              <button className='btn_type_view' onClick={() => onOpenProgram(newPrograms[6])}></button>
              <p className='popup__list-text'>«1С-разработчик»;</p>
            </li>
            <li className='popup__item'>
              <button className='btn_type_view' onClick={() => onOpenProgram(newPrograms[3])}></button>
              <p className='popup__list-text'>«Аналитик данных»;</p>
            </li>
            <li className='popup__item'>
              <button className='btn_type_view' onClick={() => onOpenProgram(newPrograms[4])}></button>
              <p className='popup__list-text'>«Технологии информационного моделирования в транспортном строительстве»;</p>
            </li>
            <li className='popup__item'>
              <button className='btn_type_view' onClick={() => onOpenProgram(newPrograms[5])}></button>
              <p className='popup__list-text'>«Предиктивная аналитика в транспортных задачах».</p>
            </li>
          </ul>

          <button className='popup__btn-back' type='button' onClick={onSubmit}>Назад</button>
        </div>
      </div>      

    </Popup>
  )
}

export default DocumentPopup;
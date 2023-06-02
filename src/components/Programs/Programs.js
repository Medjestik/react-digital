import React from 'react';
import './Programs.css';
import { newPrograms } from '../../utils/programs.js';

function Programs({ onOpenProgram }) {

  return (
    <div className='container'>
      <div className='programs' id='programs'>
        <h2 className='programs__title font__family_macherie'>Программы</h2>
        <ul className='programs__list'>
          {
            newPrograms.map((elem, i) => (
              <li className='programs__item' key={i}>
                <div className='programs__item-img-container'>
                  <div className='programs__item-img-overlay'></div>
                  <img className='programs__item-img' src={elem.image} alt=' '></img>
                  {
                    elem.link && 
                    <div className='programs__item-link-container'>
                      <a className='programs__item-link' target='_blank' rel='noreferrer' href={elem.link}>Видео</a>
                    </div>
                  }
                </div>
                <div className='programs__item-info'>
                  <span className='programs__item-caption'>{elem.type + ' | ' + elem.form}</span>
                  <h4 className='programs__item-title font__family_macherie'>{elem.title}</h4>
                  <button className='programs__item-button programs__item-button_type_active' type='button' onClick={() => onOpenProgram(elem)}>Подробнее</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>



    </div>
  );
}

export default Programs;

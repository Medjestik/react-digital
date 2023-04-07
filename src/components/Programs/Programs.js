import React from 'react';
import './Programs.css';
import { programs } from '../../utils/programs.js';

function Programs() {
  return (
    <div className='container'>
      <div className='programs' id='programs'>
        <h2 className='programs__title font__family_macherie'>Программы</h2>
        <ul className='programs__list'>
          {
            programs.map((elem, i) => (
              <li className='programs__item' key={i}>
                <div className='programs__item-img-container'>
                  <div className='programs__item-img-overlay'></div>
                  <img className='programs__item-img' src={elem.image} alt=' '></img>
                </div>
                <div className='programs__item-info'>
                  <span className='programs__item-caption'>{elem.type + ' | ' + elem.form}</span>
                  <h4 className='programs__item-title font__family_macherie'>{elem.title}</h4>
                  {
                    elem.link 
                    ?
                    <a className='programs__item-button programs__item-button_type_active' href={elem.link} target='_blank' rel='noreferrer'>Подробнее</a>
                    :
                    <button className='programs__item-button programs__item-button_type_block' type='button' disabled>Подробнее</button>
                  }

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

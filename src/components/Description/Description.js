import React from 'react';
import './Description.css';

function Description({ windowWidth }) {

  return (
    <div className='description' id='description'>

      <ul className='decoration__lines decoration__lines_type_small'>
        <li className='decoration__line decoration__line_number_one'>
        </li>
        <li className='decoration__line decoration__line_number_two'>
        </li>
        <li className='decoration__line decoration__line_number_three'>
        </li>
      </ul>

      <div className='container'>
        <h2 className='description__title font__family_macherie'>Информация</h2>
        {
          windowWidth > 767
          ?
          <div className='description__row'>
            <p className='description__text description__text_width_small'>Мы создали курсы для развития кадрового потенциала ИТ- отрасли у наших студентов</p>
            <span className='description__separate'></span>
            <p className='description__text'>Это расширит возможности отраслей по интеграции цифровых решений, позволит повысить производительность труда, сформировать дополнительные точки роста</p>
          </div>
          :
          <>
          <p className='description__text'>Мы создали курсы для&nbsp;развития кадрового потенциала ИТ- отрасли у наших студентов.</p>
          <p className='description__text'>Это расширит возможности отраслей по&nbsp;интеграции цифровых решений, позволит повысить производительность труда, сформировать дополнительные точки роста.</p>
          </>
        }
      </div>
      
    </div>
  );
}

export default Description;

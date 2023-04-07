import React from 'react';
import './Main.css';
import Header from '../Header/Header.js';

function Main() {
  return (
    <div className='main' id='main'>
      
      <ul className='decoration__lines'>
        <li className='decoration__line decoration__line_number_one'>
        </li>
        <li className='decoration__line decoration__line_number_two'>
        </li>
        <li className='decoration__line decoration__line_number_three'>
        </li>
      </ul>

      <div className='container'>

        <Header />

        <h1 className='main__title font__family_macherie font_color_secondary'>Цифровые кафедры</h1>
        <p className='main__subtitle'>Проект, направленный на&nbsp;создание возможностей для&nbsp;<span className='font__weight_bold'>повышения квалификации и&nbsp;получения новой профессии</span> в&nbsp;сфере информационных технологий для&nbsp;студентов Университета РУТ (МИИТ)</p>

      </div>

      <div className='main__img'></div>

    </div>
  );
}

export default Main;
import React from 'react';
import './Main.css';
import Header from '../Header/Header.js';
import Marquee from 'react-fast-marquee';

function Main({ windowWidth, onOpenDocument }) {
  return (
    <div className='main' id='main'>
      
      <div className='container'>

        <Header windowWidth={windowWidth} />

        <h1 className='main__title font__family_macherie font_color_secondary'>Цифровые кафедры</h1>

        <p className='main__subtitle'>Проект, направленный на&nbsp;создание возможностей для&nbsp;<span className='font__weight_bold'>повышения квалификации и&nbsp;получения новой профессии</span> в&nbsp;сфере информационных технологий для&nbsp;студентов Университета РУТ&nbsp;(МИИТ)</p>

        <div className='main__link-container'>
          <a className='main__link' target='_blank' rel='noreferrer' href='https://www.youtube.com/embed/6YzBVZEgj7g'>Марафон цифровых кафедр</a>
          <button className='main__link main__link_type_second' type='button' onClick={onOpenDocument}>Консорциум</button>
        </div>

      </div>

      <div className='main__overlay'></div>

      <div className='main__marquees'>

        <Marquee gradient={false} speed={480} >
          <div className='main__marquee'></div>
        </Marquee>

        <Marquee gradient={false} speed={720} >
          <div className='main__marquee'></div>
        </Marquee>

        <Marquee gradient={false} speed={600} >
          <div className='main__marquee'></div>
        </Marquee>

      </div>

    </div>
  );
}

export default Main;
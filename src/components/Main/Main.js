import React from 'react';
import './Main.css';
import Header from '../Header/Header.js';
import Marquee from 'react-fast-marquee';

function Main({ windowWidth, onOpenDocument, onOpenConsortium }) {
  return (
    <div className='main' id='main'>
      
      <div className='container'>

        <Header windowWidth={windowWidth} />

        <h1 className='main__title font__family_macherie font_color_secondary'>Цифровые кафедры</h1>

        <p className='main__subtitle'>Проект, направленный на&nbsp;предоставление возможности студентам получения <span className='font__weight_bold'>дополнительной квалификации по&nbsp;ИТ-профилю</span> </p>

        <div className='main__link-container'>
          <a className='main__link' target='_blank' rel='noreferrer' href='https://www.youtube.com/embed/6YzBVZEgj7g'>Марафон цифровых кафедр</a>
          <button className='main__link main__link_type_second' type='button' onClick={onOpenConsortium}>Консорциум</button>
          <button className='main__link main__link_type_second' type='button' onClick={onOpenDocument}>Документы</button>
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
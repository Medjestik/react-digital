import React from 'react';
import './Statistics.css';
import CountUp from 'react-countup';


function Statistics() {
  return (
    <div className='container'>
      <div className='statistics' id='statistics'>
        <ul className='statistics__list'>
          <li className='statistics__item'>
            <span className='statistics__caption'>программ</span>
            <CountUp className='statistics__title font__family_crystal' start={0} end={6} separator=' ' />
            <p className='statistics__subtitle'><span className='font__weight_bold'>разработано и реализованно</span> в&nbsp;РУТ&nbsp;(МИИТ)</p>
          </li>
          <li className='statistics__item'>
            <span className='statistics__caption'>студентов в 2022 г.</span>
            <CountUp className='statistics__title font__family_crystal' start={0} end={1118} separator=' ' />
            <p className='statistics__subtitle'>студентов <span className='font__weight_bold'>поступило</span> на обучение в&nbsp;2022&nbsp;году</p>
          </li>
          <li className='statistics__item'>
            <span className='statistics__caption'>студентов в 2023 г.</span>
            <CountUp className='statistics__title font__family_crystal' start={0} end={2200} separator=' ' />
            <p className='statistics__subtitle'>студентов <span className='font__weight_bold'>пройдет</span> обучение в&nbsp;2023&nbsp;году</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Statistics;

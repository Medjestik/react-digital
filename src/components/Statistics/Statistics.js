import React from 'react';
import './Statistics.css';
import CountUp from 'react-countup';


function Statistics() {
  return (
    <div className='container'>
      <div className='statistics' id='statistics'>
        <ul className='statistics__list'>
          <li className='statistics__item'>
            <span className='statistics__caption'>порядка</span>
            <CountUp className='statistics__title font__family_crystal' start={0} end={80000} separator=' ' />
            <p className='statistics__subtitle'>студентов <span className='font__weight_bold'>поступило</span> на обучение в&nbsp;2022&nbsp;году</p>
          </li>
          <li className='statistics__item'>
            <span className='statistics__caption'>более</span>
            <CountUp className='statistics__title font__family_crystal' start={0} end={80000} separator=' ' />
            <p className='statistics__subtitle'>студентов <span className='font__weight_bold'>пройдет</span> обучение в&nbsp;2023&nbsp;году</p>
          </li>
          <li className='statistics__item'>
            <span className='statistics__caption'>более</span>
            <CountUp className='statistics__title font__family_crystal' start={0} end={385000} separator=' ' />
            <p className='statistics__subtitle'>студентов <span className='font__weight_bold'>планируется</span> обучить к&nbsp;2025&nbsp;году</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Statistics;

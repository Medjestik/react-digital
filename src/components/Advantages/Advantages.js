import React from 'react';
import './Advantages.css';
import calendarIcon from '../../images/icons/calendar.svg';
import educationIcon from '../../images/icons/education.svg';
import clockIcon from '../../images/icons/clock.svg';
import teamIcon from '../../images/icons/team.svg';
import clickIcon from '../../images/icons/click.svg';

function Advantages() {
  return (
    <div className='advantages'>
      <div className='container'>
        <ul className='advantages__list'>

          <li className='advantages__item advantages__item_number_first'>
            <img className='advantages__icon' src={calendarIcon} alt=' '></img>
            <h4 className='advantages__title font__family_macherie'>9-15 месяца</h4>
            <p className='advantages__subtitle'>срок обучения по&nbsp;дополнительным программам переподготовки ИТ-профиля</p>
          </li>

          <li className='advantages__item advantages__item_number_second'>
            <img className='advantages__icon' src={educationIcon} alt=' '></img>
            <h4 className='advantages__title font__family_macherie'>Вариативный формат обучения</h4>
            <p className='advantages__subtitle'>проектные команды / онлайн и&nbsp;оффлайн форматы / практика в&nbsp;организациях реального сектора экономики</p>
          </li>

          <li className='advantages__item advantages__item_number_third'>
            <img className='advantages__icon' src={clockIcon} alt=' '></img>
            <h4 className='advantages__title font__family_macherie'>250</h4>
            <p className='advantages__subtitle'>минимальное количество часов обучения</p>
          </li>

          <li className='advantages__item advantages__item_number_fourth'>
            <img className='advantages__icon' src={teamIcon} alt=' '></img>
            <h4 className='advantages__title font__family_macherie'>{`>`}20%</h4>
            <p className='advantages__subtitle'>участие представителей бизнеса в&nbsp;реалиации учебной нагрузки и&nbsp;итоговой аттестации</p>
          </li>

          <li className='advantages__item advantages__item_number_five'>
            <img className='advantages__icon' src={clickIcon} alt=' '></img>
            <h4 className='advantages__title font__family_macherie'>115 из 650</h4>
            <p className='advantages__subtitle'>вузов было выбрано программой “Приоритет-2030”, что&nbsp;составляет 18% от&nbsp;количества всех институтов</p>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Advantages;

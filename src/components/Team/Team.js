import React from 'react';
import './Team.css';
import { team } from '../../utils/team.js';

function Team() {

  return (
    <div className='container'>
      <div className='team' id='team'>
        <h2 className='team__title font__family_macherie'>Коллектив</h2>
        <ul className='team__list'>
          {
            team.map((elem, i) => (
              <li className={`team__item ${elem.type === 'leader' ? 'team__item_type_leader' : ''}`} key={i}>
                <img className='team__item-img' src={elem.image} alt=' '></img>
                <h3 className={`team__item-name ${elem.type === 'leader' ? 'team__item-name_type_leader' : ''}`}>{elem.name}</h3>
                <span className={`team__item-description ${elem.type === 'leader' ? 'team__item-description_type_leader' : ''}`}>{elem.description}</span>
                <p className={`team__item-status ${elem.type === 'leader' ? 'team__item-status_type_leader' : ''}`}>{elem.status}</p>              
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Team;

import React from 'react';
import './Programs.css';
import { programs } from '../../utils/programs.js';
import ProgramInfoPopup from '../Popup/ProgramInfoPopup/ProgramInfoPopup.js';

function Programs() {

  const [isOpenProgramInfoPopup, setIsOpenProgramInfoPopup] = React.useState(false);

  const [currentProgram, setCurrentProgram] = React.useState({});

  function openProgramInfoPopup(program) {
    setCurrentProgram(program);
    setIsOpenProgramInfoPopup(true);
  }

  function closePopups() {
    setIsOpenProgramInfoPopup(false);
  }

  React.useEffect(() => {
    return(() => {
      setCurrentProgram({});
    })
  }, []);

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
                  <button className='programs__item-button programs__item-button_type_active' type='button' onClick={() => openProgramInfoPopup(elem)}>Подробнее</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      {
        isOpenProgramInfoPopup &&
        <ProgramInfoPopup
          isOpen={isOpenProgramInfoPopup}
          onClose={closePopups}
          program={currentProgram}
        />
      }

    </div>
  );
}

export default Programs;

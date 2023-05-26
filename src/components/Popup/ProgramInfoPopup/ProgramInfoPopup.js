import React from 'react';
import './ProgramInfoPopup.css';
import Popup from '../Popup.js';

function ProgramInfoPopup({ isOpen, onClose, program }) {

  const [currentSection, setCurrentSection] = React.useState(program.sections[0]);

  function onChangeSection(section) {
    setCurrentSection(section);
  }

  function onSubmit() {
    onClose();
  }

  function renderSectionData(elem, i) {
    if (elem.dataType === 'row') {
      return (
        <li className='program-info__section-item' key={i}>
          <h6 className='program-info__section-item-title'>{elem.dataTitle}</h6>
          <ul className='program-info__section-item-list program-info__section-item-list_type_row'>
            {
              elem.rows.map((elem, i) => (
                <li className='program-info__section-item-list-item program-info__section-item-list-item_type_row' key={i}><span className='font__weight_bold'>{elem.rowTitle}</span>{elem.rowText}</li>
              ))
            }
          </ul>
        </li>
      )
    } else if (elem.dataType === 'list') {
      return (
        <li className='program-info__section-item' key={i}>
          <h6 className='program-info__section-item-title'>{elem.dataTitle}</h6>
          <ul className='program-info__section-item-list'>
            {
              elem.list.map((elem, i) => (
                <li className='program-info__section-item-list-item' key={i}>{elem}</li>
              ))
            }
          </ul>
        </li>
      )
    } else {
      return (
        <li className='program-info__section-item' key={i}>
          <h6 className='program-info__section-item-title'>{elem.dataTitle}</h6>
          <div className='program-info__section-item-list program-info__section-item-list_type_row'>
            <p className='program-info__section-item-list-item program-info__section-item-list-item_type_row'>{elem.text}</p>
          </div>
        </li>
      )
    }
  }

  return (
    <Popup
    isOpen={isOpen}
    onSubmit={onSubmit}
    formWidth={'large'}
    formName={'program-info-popup'}
    >

      <div className='program-info__top'>
        <img className='program-info__img' src={program.image} alt=' '></img>
        <div className='program-info__overlay'></div>
        <div className='program-info__container'>
          <span className='program-info__caption'>{program.type + ' | ' +program.form}</span>
          <h2 className='program-info__title font__family_macherie'>{program.title}</h2>
        </div>
      </div>

      <div className='program-info__bottom'>
        <div className='program-info__container'>
          <ul className='program-info__tags'>
            {program.sections.map((elem, i) => (
              <li className={`program-info__tag ${currentSection.sectionTag === elem.sectionTag ? 'program-info__tag_type_active' : ''}`} key={i} onClick={() => onChangeSection(elem)}>{elem.sectionTag}</li>
            ))}
          </ul>

          <div className='program-info__section'>
            <h4 className='program-info__section-title'>{currentSection.sectionTitle}</h4>
            <p className='program-info__section-subtitle'>{currentSection.sectionDescription}</p>
            <ul className='program-info__section-list'>
              {
                currentSection.sectionData.map((elem, i) => (
                  renderSectionData(elem, i)
                ))
              }
            </ul>
          </div>


          <button className='popup__btn-back' type='button' onClick={onSubmit}>Назад</button>
        </div>
      </div>

      

    </Popup>
  )
}

export default ProgramInfoPopup;
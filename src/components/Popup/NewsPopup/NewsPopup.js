import React from 'react';
import './NewsPopup.css';
import Popup from '../Popup.js';

function NewsPopup({ isOpen, onClose, news }) {


  function onSubmit() {
    onClose();
  }

  return (
    <Popup
    isOpen={isOpen}
    onSubmit={onSubmit}
    formWidth={'large'}
    formName={'news-popup'}
    >

      <div className='program-info__top'>
        <img className='program-info__img' src={news.poster} alt=' '></img>
        <div className='program-info__overlay'></div>
        <div className='program-info__container'>
          <span className='program-info__caption'>{news.date}</span>
          <h2 className='news-popup__title'>{news.title}</h2>
        </div>
      </div>

      <div className='program-info__bottom'>
        <div className='program-info__container'>
          {
            news.content.map((elem, i) => (
              <div key={i}>
              {         
                elem.type === 'text' &&
                <p className='news-popup__text'>{elem.text}</p>
              }

              {         
                elem.type === 'picture' &&
                <img className='news-popup__pict' src={elem.img} alt=' '></img>
              }

              {         
                elem.type === 'gallery' &&
                <>
                  <div className='news-popup__pict-container'>
                    {
                      elem.img.map((elem, index) =>(
                        <img className='news-popup__pict' key={index} src={elem} alt=' '></img>
                      ))
                    }
                  </div>
                  <p className='news-popup__text'>{elem.caption}</p>
                </>
                
              }
              </div>
            ))
          }
          <button className='popup__btn-back' type='button' onClick={onSubmit}>Назад</button>
        </div>
      </div>      

    </Popup>
  )
}

export default NewsPopup;
import React from 'react';
import './News.css'
import { news } from '../../utils/news.js';
import Carousel from 'react-elastic-carousel';
import NewsPopup from '../Popup/NewsPopup/NewsPopup.js';

function News({ windowWidth }) {

  const [slideCount, setSlideCount] = React.useState(0);

  const [isOpenNewsPopup, setIsOpenNewsPopup] = React.useState(false);

  const [currentNews, setCurrentNews] = React.useState({});

  function openNewsPopup(news) {
    setCurrentNews(news);
    setIsOpenNewsPopup(true);
  }

  function closePopups() {
    setIsOpenNewsPopup(false);
  }

  React.useEffect(() => {
    return(() => {
      setCurrentNews({});
    })
  }, []);

  React.useEffect(() => {
    if (windowWidth < 1279) {
      setSlideCount(1)
    } else {
      setSlideCount(2)
    }

  }, [windowWidth])

  return (
    <div className='container'>
      <div className='news' id='news'>
        <h2 className='news__title font__family_macherie'>Новости проекта</h2>
        <ul className='news__list'>
          <Carousel
          itemsToShow={slideCount} 
          enableAutoPlay={false} 
          autoPlaySpeed={10000}
          >
          {
            news.map((elem, i) => (
              <li className='news__item' key={i}>
                <div className='news__item-img-overlay'></div>
                <img className='news__item-img' src={elem.poster} alt=' '></img>
                <div className='news__item-info'>
                  <p className='news__item-date'>{elem.date}</p>
                  <h3 className='news__item-title'>{elem.title}</h3>
                  <button className='news__item-btn' type='button' onClick={() => openNewsPopup(elem)}>Читать</button>
                </div>
              </li>
            ))
          }
          </Carousel>
        </ul>
      </div>

      {
        isOpenNewsPopup &&
        <NewsPopup
          isOpen={isOpenNewsPopup}
          onClose={closePopups}
          news={currentNews}
        />
      }

    </div>
  );
}

export default News; 

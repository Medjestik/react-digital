import React from 'react';
import './Partners.css'
import { partners } from '../../utils/partners.js';
import Carousel from 'react-elastic-carousel';

function Partners({ windowWidth }) {

  const [slideCount, setSlideCount] = React.useState(0);

  React.useEffect(() => {
    if (windowWidth < 1439) {
      if (windowWidth < 767) {
        setSlideCount(1)
      } else {
        setSlideCount(3)
      }
    } else {
      setSlideCount(3)
    }

  }, [windowWidth])

  return (
    <div className='container'>
      <div className='partners' id='partners'>
        <h2 className='partners__title font__family_macherie'>Партнеры проекта</h2>
        <ul className='partners__list'>
          <Carousel
          itemsToShow={slideCount} 
          enableAutoPlay={false} 
          autoPlaySpeed={10000}
          >
          {
            partners.map((elem, i) => (
              <li className='partners__item' key={i}>
                <img className='partners__item-img' src={elem} alt=' '></img>
              </li>
            ))
          }
          </Carousel>
        </ul>
      </div>
    </div>
  );
}

export default Partners;

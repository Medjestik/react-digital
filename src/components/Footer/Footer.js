import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

function Footer({ windowWidth }) {
  return (
    <footer className='footer'>

      {
        windowWidth > 767
        ?
        <div></div>
        :
        <ul className='decoration__lines decoration__lines_type_small'>
          <li className='decoration__line decoration__line_number_one'>
          </li>
          <li className='decoration__line decoration__line_number_two'>
          </li>
          <li className='decoration__line decoration__line_number_three'>
          </li>
        </ul>
      }

      <div className='container'>
        <div className='footer__container'>
          <div className='footer__info'>
            <h2 className='footer__title font__family_macherie'>Цифровые кафедры</h2>
            <div className='logo'></div>
          </div>
          <nav className='footer__nav'>
            <div className='footer__column'>
              <h4 className='footer__column-title'>Навигация</h4>
              <Link className='footer__link' to='main' smooth={true} offset={0} duration={1500} spy={true}>Главная</Link>
              <Link className='footer__link' to='programs' smooth={true} offset={-80} duration={1000} spy={true}>Программы</Link>
              <Link className='footer__link' to='description' smooth={true} offset={0} duration={500} spy={true}>Информация</Link>
            </div>
            <div className='footer__column footer__column_type_large'>
              <h4 className='footer__column-title'>Ресурсы</h4>
              <a className='footer__link' href='https://miit-ief.ru/' target='_blank' rel='noreferrer'>Институт экономики и финансов</a>
              <a className='footer__link' href='https://www.miit.ru/' target='_blank' rel='noreferrer'>РУТ (МИИТ)</a>
            </div>
          </nav>
        </div>
        <p className='footer__copy'>&#169; 2024 "Российский университет транспорта"</p>
      </div>
    </footer>
  );
}

export default Footer;

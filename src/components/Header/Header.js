import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

function Header({ windowWidth }) {
  return (
    <header className='header'>

      <div className='logo'></div>

      {
        windowWidth > 767
        ?
        <>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link className='nav__link' to='programs' smooth={true} offset={-80} duration={500} spy={true}>Программы</Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to='description' smooth={true} offset={0} duration={1000} spy={true}>Информация</Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to='news' smooth={true} offset={-50} duration={1500} spy={true}>Новости</Link>
            </li>
          </ul>
        </nav>
        <a className='header__button' target='_blank' rel='noreferrer' href='https://test.emiit.ru'>Учебный портал</a>
        </>
        :
        <>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link className='nav__link' to='programs' smooth={true} offset={-80} duration={500} spy={true}>Программы</Link>
            </li>
          </ul>
        </nav>
        </>
      }

    </header>
  );
}

export default Header;

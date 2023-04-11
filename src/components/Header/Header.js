import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className='header'>

      <div className='logo'></div>

      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link className='nav__link' to='programs' smooth={true} offset={-80} duration={500} spy={true}>Программы</Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='description' smooth={true} offset={0} duration={1000} spy={true}>Информация</Link>
          </li>
        </ul>
      </nav>

      <a className='header__button' target='_blank' rel='noreferrer' href='https://edu.emiit.ru/'>Учебный портал</a>

    </header>
  );
}

export default Header;

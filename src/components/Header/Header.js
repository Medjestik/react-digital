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

      <button className='header__button' type='button'>Записаться на программу</button>

    </header>
  );
}

export default Header;

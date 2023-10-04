import React from 'react';
import './DocumentPopup.css';
import Popup from '../Popup.js';

function DocumentPopup({ isOpen, onClose }) {

  const [currentPassword, setCurrentPassword] = React.useState('');
  const [currentPasswordError, setCurrentPasswordError] = React.useState({ isShow: false, text: '' });

  const [isShowDocuments, setIsShowDocuments] = React.useState(false);

  function onSubmit() {
    onClose();
  }

  function changeCurrentPassword(e) {
    setCurrentPassword(e.target.value);
    if (e.target.value === 'rut-ck-2023') {
      setCurrentPasswordError({ text: '', isShow: false });
      setIsShowDocuments(true);
    } else {
      setCurrentPasswordError({ text: 'Введите правильный пароль', isShow: true });
      setIsShowDocuments(false);
    }
  }

  return (
    <Popup
    isOpen={isOpen}
    onSubmit={onSubmit}
    formWidth={'large'}
    formName={'document-popup'}
    >

      <div className='program-info__bottom'>
        <div className='program-info__container'>
          <h2 className='popup__title'>Документы</h2>
          <h4 className='popup__subtitle'>Для доступа к документам введите пароль: </h4>

          <div className='popup__input-field'>
            <input 
            className='popup__input'
            id='currentPassword'
            value={currentPassword}
            onChange={changeCurrentPassword}
            name='currentPassword'
            placeholder='Введите пароль..'
            minLength='6'
            autoComplete='off'
            required 
            />
          </div>
          <span className={`popup__input-error ${currentPasswordError.isShow ? 'popup__input-error_status_show' : ''}`}>
            {currentPasswordError.text}
          </span>


          {
            isShowDocuments 
            ?
            <a className='popup__btn-back popup__btn-link' target='_blank' rel='noreferrer' href='https://cloud.mail.ru/public/gFsL/3K45Bwgur'>Переход к документам</a>
            :
            <button className='popup__btn-back' type='button' onClick={onSubmit}>Назад</button>
          }
        
        </div>
      </div>      

    </Popup>
  )
}

export default DocumentPopup;
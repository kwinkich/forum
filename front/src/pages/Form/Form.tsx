import React, { useState } from 'react';
import Login from '../../components/LogIn/Login';
import Register from '../../components/Register/Register';
import styles from './Form.module.css';

function Form() {
  const [selectedOption, setSelectedOption] = useState<'register' | 'login'>('register');
  const [linkText, setLinkText] = useState('Або увійдіть, якщо маєте аккаунт');

  const handleOptionChange = (option: 'register' | 'login') => {
    if (option === selectedOption) {
      // Если выбрана текущая опция, меняем на противоположную
      setSelectedOption(option === 'login' ? 'register' : 'login');
      setLinkText(option === 'login' ? 'Або увійдіть, якщо маєте аккаунт' : 'Або зареєструйтесь, якщо у вас немає аккаунта');
    } else {
      setSelectedOption(option);
      setLinkText(option === 'login' ? 'Або зареєструйтесь, якщо у вас немає аккаунта' : 'Або увійдіть, якщо маєте аккаунт');
    }
  };

  return (
    <div className={styles.formBlock}>
      {/* В зависимости от выбранной опции отображаем соответствующий компонент */}
      {selectedOption === 'register' && <Register />}
      {selectedOption === 'login' && <Login />}
      <a className={styles.link} onClick={() => handleOptionChange('login')}>
        {linkText}
      </a>
    </div>
  );
}

export default Form;

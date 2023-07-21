import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './ToggleTheme.module.css';

function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  };

  return (
    <button className={styles.toggleBtn} onClick={handleToggleClick}>
      <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className={styles.toggleIcon} />
    </button>
  );
}

export default ToggleTheme;

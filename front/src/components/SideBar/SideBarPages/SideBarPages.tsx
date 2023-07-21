import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './SideBarPages.module.css';

interface SideBarPagesProps {
  onClick?: () => void; // Добавлен вопросительный знак для обработки клика (необязательный параметр)
  icon: IconProp;
  namePage: string;
}

function SideBarPages({ onClick, icon, namePage }: SideBarPagesProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Вызов обработчика клика, если он передан
    }
  };

  return (
    <div className={styles.linkWrrap}>
      <a className={styles.sideBarLink} onClick={handleClick}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <p className={styles.pageName}>{namePage}</p>
      </a>
    </div>
  );
}

export default SideBarPages;

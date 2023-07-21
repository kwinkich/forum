import React  from 'react';
import { observer } from 'mobx-react-lite';
import styles from './ProfileUser.module.css';
import guts from '../../assets/guts.jpg'; // Проверьте путь к вашему хранилищу
import { Context } from '../../main'; // Проверьте путь к вашему хранилищу

interface ProfileUserProps {
  onClick?: () => void;
}

function ProfileUser({ onClick }: ProfileUserProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Получаем доступ к хранилищу
  const { store } = React.useContext(Context);

  // Получаем имя пользователя из хранилища
  const userName = store.user.userName;

  return (
    <div className={styles.profileBlockLink}>
      <a className={styles.profileBlock} onClick={handleClick}>
        <div className={styles.imageProfile}>
          <img src={guts} alt="" />
        </div>
        {/* Отображаем имя пользователя */}
        <p className={styles.nameUser}>{userName}</p>
      </a>
    </div>
  );
}

export default observer(ProfileUser);

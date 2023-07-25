import React, {useEffect, useState}  from 'react';
import { observer } from 'mobx-react-lite';
import styles from './ProfileUser.module.css';
import { Context } from '../../main'; // Проверьте путь к вашему хранилищу

interface ProfileUserProps {
  onClick?: () => void;
	avatarPath: string;
}

function ProfileUser({ onClick, avatarPath }: ProfileUserProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const [isAvatar, setAvatar] = useState(false);
  const { store } = React.useContext(Context);
  const userName = store.user.userName;

	useEffect(() => {
    setAvatar(!!avatarPath);
  }, [avatarPath]);


  return (
    <div className={styles.profileBlockLink}>
      <a className={styles.profileBlock} onClick={handleClick}>
			{isAvatar ? ( // Проверяем значение isBanner
								<div className={styles.imageProfile}>
									<img src={avatarPath} alt="avatar" />
								</div>
								) : (
								<div className={styles.imagePlaceholder}>
								</div>
							)}
        {/* Отображаем имя пользователя */}
        <p className={styles.nameUser}>{userName}</p>
      </a>
    </div>
  );
}

export default observer(ProfileUser);

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import ProfileUser from '../../components/ProfileUser/ProfileUser';
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';
import styles from './UserPage.module.css'
import AvatarUploadForm from '../../components/UploadForm/UploadForm';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/store';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

interface userPageProps{
		bannerPath: string;
		avatarPath: string;
		descriptionPath: string;
}

function UserPage({ bannerPath, avatarPath, descriptionPath }: userPageProps) {
  const store = useStore();
  const [isBanner, setBanner] = useState(false);
  const [isAvatar, setAvatar] = useState(false);
  const [isDesc, setDesc] = useState(false);
  const userName = store.user.userName;
  const navigate = useNavigate();
  const handleUserPageClick = () => {
    navigate('/user');
  };

  useEffect(() => {
    setBanner(!!bannerPath);
  }, [bannerPath]);
	useEffect(() => {
    setAvatar(!!avatarPath);
  }, [avatarPath]);
	useEffect(() => {
    setDesc(!!descriptionPath);
  }, [descriptionPath]);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Search />
          <ToggleTheme />
          <ProfileUser avatarPath='' onClick={handleUserPageClick} />
        </div>
      </header>
      <article className={styles.userProfileBlock}>
        <div className={styles.userProfileContent}>
          {isBanner ? ( // Проверяем значение isBanner
            <div className={styles.userProfileBannerBlock}>
              <img src={bannerPath} alt="" className={styles.userProfileBanner} />
            </div>
          ) : (
            <div className={styles.placeholderBannerBlock}>
            </div>
          )}
					<AvatarUploadForm/>
          <div className={styles.userProfileInfoBlock}>
							{isAvatar ? ( // Проверяем значение isBanner
								<div className={styles.userProfileImage}>
									<img src={avatarPath} alt="" className={styles.userProfileBanner} />
								</div>
								) : (
								<div className={styles.placeholderAvatarBlock}>
								</div>
							)}
            <p className={styles.userProfileNickname}>{userName}</p>
          AvatarUploadForm</div>
          <div className={styles.userDescBlock}>
            <p className={styles.userDescTitle}>Опис:</p>
						{isDesc ? ( // Проверяем значение isBanner
								<p className={styles.userDesc}>{descriptionPath}</p>
								) : (
								<p className={styles.userDesc}>
									Опис відсутній
								</p>
							)}
          </div>
          <button className={styles.btnExit} onClick={() => store.logout()}>Вийти 
					<FontAwesomeIcon className={styles.exitIcon} icon={faRightFromBracket} />
					</button>
        </div>
      </article>
    </section>
  );
}


export default observer(UserPage)





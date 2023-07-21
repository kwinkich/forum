
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import ProfileUser from '../../components/ProfileUser/ProfileUser';
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';
import styles from './UserPage.module.css'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/store';

interface userPageProps{
		bannerPath: string;
		avatarPath: string;
		nicknamePath: string;
		descriptionPath: string;
}

function UserPage({bannerPath, avatarPath, nicknamePath, descriptionPath}:userPageProps) {
	  // Получаем доступ к хранилищу
		const store = useStore();
		// Получаем имя пользователя из хранилища
		const userName = store.user.userName;
	

	const navigate = useNavigate();

  const handleUserPageClick = () => {
    navigate('/user');
  };
	return(
		<section className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Search />
            <ToggleTheme />
            <ProfileUser onClick={handleUserPageClick}/>
          </div>
        </header>
				<article className={styles.userProfileBlock}>
					<div className={styles.userProfileContent}>
						<div className={styles.userProfileBannerBlock}>
							<img src={bannerPath} alt="" className={styles.userProfileBanner}/>
						</div>
						<div className={styles.userProfileInfoBlock}>
							<div className={styles.userProfileImage}>
								<img src={avatarPath} alt="avatar" />
							</div>
							<p className={styles.userProfileNickname}>{userName}</p>
						</div>
						<div className={styles.userDescBlock}>
							<p className={styles.userDescTitle}>Опис:</p>
							<p className={styles.userDesc}>{descriptionPath}</p>
						</div>
						<button onClick={() => store.logout()}>Вийти</button>
					</div>
				</article>
      </section>
	)
}

export default observer(UserPage)



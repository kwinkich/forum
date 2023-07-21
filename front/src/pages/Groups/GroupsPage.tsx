import styles from './GroupsPage.module.css'
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import ProfileUser from '../../components/ProfileUser/ProfileUser';
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';
import NavBarChats from '../../components/NavBarChats/NavBarChats';

import PostImage from '../../assets/uuu.gif';
import Group from '../../components/Group/Group';


interface GroupContent {
  groupLink: string;
  nameGroup: string;
  userLink: string;
  userNick: string;
  userAvatar: string;
  groupDesccription: string;
}

function GroupsPage() {
  const navigate = useNavigate();
  const handleUserPageClick = () => {
    navigate('/user');
  };

	const group1: GroupContent = {
		groupLink: 'https://google.com',
    nameGroup: 'Тест',
		userLink: '#',
		userNick: 'Тест владелец',
		userAvatar: PostImage,
		groupDesccription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, optio? Excepturi nihil rerum consequuntur quaerat ducimus adipisci corporis libero molestiae culpa vero expedita, dolor inventore ab soluta impedit deleniti temporibus accusamus sapiente! Qui necessitatibus eius, perferendis quidem sunt dicta aliquid? Qui numquam laboriosam tempora doloremque eligendi, consequuntur sed ullam neque!',
  };

	const group2: GroupContent = {
		groupLink: 'https://google.com',
    nameGroup: 'Я люблю свою маму!',
		userLink: '#',
		userNick: 'kwinkich',
		userAvatar: PostImage,
		groupDesccription: 'МОИ ПОДПИСЧИКИ ЛУЧШИЕ Я ИХ ОБОЖАЮ	',
  };

	return(
		<>
		<section className={styles.globalWrapper}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Search />
            <ToggleTheme />
            <ProfileUser onClick={handleUserPageClick}/>
          </div>
        </header>
        <section className={styles.navBarChats}>
          <NavBarChats globalLinkText='Усі групи' secondLinkText='Популярні групи' privatLinkText='Ваші групи' globalLink="#" secondLink="#" privatLink="#" />
        </section>
				<Group groupContent={group1}/>
				<Group groupContent={group2}/>
      </div>
    </section>
		</>
	)
}

export default GroupsPage

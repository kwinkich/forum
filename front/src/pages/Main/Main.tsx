
import styles from './Main.module.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import ukLocale from 'date-fns/locale/uk';
import Search from '../../components/Search/Search';
import ProfileUser from '../../components/ProfileUser/ProfileUser';
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';
import NavBarChats from '../../components/NavBarChats/NavBarChats';
import Post from '../../components/Posts/Post';
import PostImage from '../../assets/uuu.gif';




interface PostContent {
  title: string;
  userLink: string;
  userNick: string;
  postDate: string;
  image?: string;
  textContent: string;
}

function MainPage() {
  const navigate = useNavigate();
  const handleUserPageClick = () => {
    navigate('/user');
  };

  const postContent1: PostContent = {
    title: 'Я заработал лярд баксов',
    userLink: '/user',
    userNick: 'kwinkich',
    postDate: format(new Date(), 'eeee, d MMMM, HH:mm', { locale: ukLocale }),
    textContent:
      'Lorem ipsum dolor sit amet consectetur. Turpis id eu faucibus tempor. Orci sit ut dignissim molestie lectus consectetur. Nibh pellentesque metus neque eget arcu praesent interdum enim. Viverra sagittis bibendum nibh condimentum ut pellentesque vestibulum consequat. Nunc viverra mauris at pretium vehicula quam. Morbi elementum metus risus ipsum. Quam feugiat vitae est pharetra quis cras. Viverra pellentesque adipiscing lacus et. Nulla volutpat lectus malesuada neque in. Viverra bibendum vitae aliquam gravida. Egestas sapien id eleifend aliquam morbi aliquam nullam lectus.',
  };

  const postContent2: PostContent = {
    title: 'вфывфывф',
    userLink: '/user',
    userNick: 'Obama',
    postDate: format(new Date(), 'eeee, d MMMM, HH:mm', { locale: ukLocale }),
    image: PostImage,
    textContent: 'Lorem ipsum dolor sit amet consectetur. Turpis id eu faucibus tempor. Orci sit ut dignissim molestie lectus consectetur. Nibh pellentesque metus',
  };
  
  const postContent3: PostContent = {
    title: '123',
    userLink: '/user',
    userNick: 'depov',
    postDate: format(new Date('21 Jun 2023 16:16'), 'eeee, d MMMM, HH:mm', { locale: ukLocale }),
    textContent: 'хівхіхвіхвхіхіввхі',
  };

  return (
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Search />
            <ToggleTheme />
            <ProfileUser avatarPath='' onClick={handleUserPageClick}/>
          </div>
        </header>
        <section className={styles.navBarChats}>
          <NavBarChats globalLinkText='Глобальний чат' secondLinkText='Новини форуму' privatLinkText='Ваші чати' globalLink="#" secondLink="#" privatLink="#" />
        </section>
        <Post postContent={postContent1} />
        <Post postContent={postContent2} />
        <Post postContent={postContent3} />
        <Post postContent={postContent3} />
        <Post postContent={postContent3} />
        <Post postContent={postContent3} />
      </section>
  );
}

export default MainPage;

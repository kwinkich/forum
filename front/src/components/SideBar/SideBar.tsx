import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import SideBarPages from './SideBarPages/SideBarPages';
import { faHouse, faUserGroup, faSquarePlus, faGear } from '@fortawesome/free-solid-svg-icons';
import styles from './SideBar.module.css';

function SideBar() {
  const navigate = useNavigate();

  const handleMainPageClick = () => {
    navigate('/');
  };

  const handleGroupsPageClick = () => {
    navigate('/groups');
  };

  const handleCreatePageClick = () => {
    navigate('/create');
  };

  const handleSettingsPageClick = () => {
    navigate('/settings');
  };

  return (
    <div className={styles.wrapperAside}>
      <aside className={styles.sideBar}>
        <Logo />
        <article className={styles.wrapperLinkPage}>
          {/* Передаем функции навигации в кастомный компонент */}
          <SideBarPages onClick={handleMainPageClick} icon={faHouse} namePage="Головна" />
          <SideBarPages onClick={handleGroupsPageClick} icon={faUserGroup} namePage="Групи" />
          <SideBarPages onClick={handleCreatePageClick} icon={faSquarePlus} namePage="Створити" />
          <SideBarPages onClick={handleSettingsPageClick} icon={faGear} namePage="Налаштування" />
        </article>
      </aside>
    </div>
  );
}

export default SideBar;

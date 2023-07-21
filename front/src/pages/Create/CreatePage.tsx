
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import ProfileUser from '../../components/ProfileUser/ProfileUser';
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';
import styles from './CreatePage.module.css'



function CreatePage() {
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
				<article className={styles.formCreateBlock}>
					<form action="" className={styles.formCreate}>
						<input type="text" className={styles.namePostCreate} placeholder='Тема/Назва посту*'/>
						<textarea placeholder='Текст посту*' className={styles.contentPostCreate}/>
						<h3 className={styles.chooseFile}>Додатковий  файл посту</h3> 
						<input type='file' className={styles.filePostCreate}></input>
						<button className={styles.submitCreateBtn}>Опублікувати</button>
					</form>
				</article>
      </section>
	)
}

export default CreatePage

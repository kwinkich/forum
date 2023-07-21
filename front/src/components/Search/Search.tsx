import styles from './Search.module.css'

function Search() {
	return(
		<>
			<input type="text" className={styles.searchInput} placeholder="Знайти користувача"/>
		</>
	)
}

export default Search

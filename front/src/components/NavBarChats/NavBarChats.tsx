import styles from './NavBarChats.module.css'

interface NavBarLinksProps{
	globalLinkText: string;
	secondLinkText: string;
	privatLinkText: string;
	globalLink: string;
	secondLink: string;
	privatLink: string;
}

function NavBarChats(props: NavBarLinksProps) {
	return(
		<>
			<nav className={styles.navBar}>
				<ul className={styles.navBarBlock}>
					<li className={styles.navBarLi}>
						<a href={props.globalLink} className={styles.navBarLink}>{props.globalLinkText}</a>
					</li>
					<li className={styles.navBarLi}>
						<a href={props.secondLink} className={styles.navBarLink}>{props.secondLinkText}</a>
					</li>
					<li className={styles.navBarLi}>
						<a href={props.privatLink} className={styles.navBarLink}>{props.privatLinkText}</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default NavBarChats

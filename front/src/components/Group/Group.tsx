import styles from './Group.module.css'

interface GroupProps {
  groupContent: GroupContent;
}

interface GroupContent {
	groupLink: string;
  nameGroup: string;
  userLink: string;
  userNick: string;
  userAvatar: string;
  groupDesccription: string;
}

function Group(props: GroupProps){
	const { groupLink, nameGroup, userLink, userNick, userAvatar, groupDesccription } = props.groupContent;


	return(
		<article className={styles.group}>
			<a href={groupLink}>
				<div className={styles.groupContent}>
					<div className={styles.groupHead}>
						<h3 className={styles.groupName}>{nameGroup}</h3>
						<div className={styles.groupOwnerBlock}>
							<p className={styles.groupP}>Власник:</p>
							<a href={userLink} className={styles.groupOwner}>
								<img src={userAvatar} alt="dsadas" className={styles.ownerAvatar}/>
								<p className={styles.ownerNick}>{userNick}</p>
							</a>
						</div>
					</div>
					<p className={styles.groupTitleDesc}>Опис</p>
					<p className={styles.globalDesc}>{groupDesccription}</p>
				</div>
			</a>
		</article>
	)
}

export default Group

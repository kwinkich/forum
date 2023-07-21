import {useState, useContext } from 'react';
import { Context } from '../../main';
import { observer } from "mobx-react-lite"
import styles from './Login.module.css'

function Login(){
		const [userName, setUserName] = useState('');
		const [password, setPassword] = useState('');
		const {store} = useContext(Context);
	return(
		<div className={styles.formBlock}>
			<h1 className={styles.formTitle}>Вітаємо на AIO Forum!</h1>
				<input onChange={e=>setUserName(e.target.value)} type="text" placeholder="Enter username" className={styles.input}/>
				<input onChange={e=>setPassword(e.target.value)} type="password" placeholder="Enter password" className={styles.input}/>
				<div className={styles.btns}>
					<button onClick={() => store.login(userName, password)} className={styles.btn}>Увійти</button>
				</div>
		</div>
	)
}

export default observer(Login);

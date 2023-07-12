import styles from '../assets/SideBarNavigation.module.css';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { SideBar } from '../data/SideBar';
import { useState } from 'react';

export default function SideBarNavigation() {
	const [open, setopen] = useState(true);
	const toggleOpen = () => {
		setopen(!open);
	};

	return (
		<div className={open?styles.sidenav:styles.sidenavClosed}>
			<button className={styles.menuBtn} onClick={toggleOpen}>
				{open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
			</button>
			{SideBar.map(item =>{
				return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
					{item.icon}
					<span className={styles.linkText}>{item.text}</span>
				</NavLink>;
			})}
		</div>
	);
}

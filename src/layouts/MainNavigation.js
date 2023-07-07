import classes from '../assets/MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<ul className={classes.main_navigation}>
			<li>News</li>
			<li>Suche</li>
			<li>Wiki</li>
			<li>Chat</li>
			<li>Discord</li>
		</ul>
	);
};

export default MainNavigation;
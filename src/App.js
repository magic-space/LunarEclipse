import './assets/App.css';
import AuthContext from './context/auth-context';
import { Routes, Route, } from 'react-router-dom';
import MainNavigation from './layouts/MainNavigation';
import UserInfo from './layouts/UserInfo';
import Inventory from './components/Inventory/Inventory';
import CountdownTimer from './components/Countdown/CountdownTimer';
import { Paper } from '@mui/material';
import SideBarNavigation from './layouts/SideBarNavigation';

function App() {
	const THREE_DAYS_IN_MS = 3 * 60 * 1000;
	const NOW_IN_MS = new Date().getTime();

	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

	return (
		<div className='App'>
			<AuthContext.Provider>
				<header className='App-header'>
					<img alt='Logo von [Spielname]' className='App-logo' />
					<MainNavigation />
					<UserInfo />
				</header>
				<main>
					<SideBarNavigation />
					<Routes>
						<Route path='/' element={<Paper></Paper>} />
						<Route path='/explore' element={<Inventory />} />
						<Route path='/statistics' element={<Paper>
							<CountdownTimer targetDate={dateTimeAfterThreeDays}></CountdownTimer>
						</Paper>} />
						<Route path='/settings' element={<Paper></Paper>} />
					</Routes>
				</main>
				<footer className='App-footer'>
					<ul>
						<li><a
							href='https://reactjs.org'
							target='_blank'
							rel='noopener noreferrer'
						>
              Support
						</a></li>
						<li><a
							className='App-link'
							href='https://reactjs.org'
							target='_blank'
							rel='noopener noreferrer'
						>
              Team
						</a></li>
						<li><a
							className='App-link'
							href='https://reactjs.org'
							target='_blank'
							rel='noopener noreferrer'
						>
              Impressum
						</a></li>
						<li>v 0.1a</li>
					</ul>

				</footer>
			</AuthContext.Provider>
		</div>
	);
}

export default App;

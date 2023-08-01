import './assets/App.css';
import AuthContext from './context/auth-context';
import { Routes, Route, } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory.tsx';
import CountdownTimer from './components/Countdown/CountdownTimer';
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
import SideBarNavigation from './layouts/SideBarNavigation';
import AppHeader from './layouts/AppHeader';
import { customTheme } from './assets/themes/customTheme';
import CharacterInfo from './layouts/CharacterInfo';

function App() {
    const THREE_DAYS_IN_MS = 3 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline enableColorScheme />
			<div className='App'>
				<AuthContext.Provider>
					<header className='App-header'>
						<AppHeader />
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
						<CharacterInfo></CharacterInfo>
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
		</ThemeProvider>
	);
}

export default App;

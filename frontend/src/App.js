import './assets/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory.tsx';
import CountdownTimer from './components/Countdown/CountdownTimer';
import { customTheme } from './assets/themes/customTheme';
import { Paper } from '@mui/material';
import Layout from './layouts/Layout';
import ProgressBar from './components/ProgressBar/ProgressBar';
import CharacterProfile from './components/Character/CharacterProfile';
import FightOverview from './components/Fight/FightOverview';
import ConstructionKit from './components/Crafting/ConstructionKit';

function App() {
    const THREE_DAYS_IN_MS = 3 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout theme={customTheme} />}>
                    <Route path='/' />
                    <Route path='/inventory' element={<Inventory weight='50' limit='100' />} />
                    <Route path='/profile' element={<CharacterProfile />} />
                    <Route path='/kit' element={<ConstructionKit />} /> 
                    <Route path='/fight' element={<FightOverview timestamp={new Date().getTime()} current={4} rounds={12} />} />
                    <Route path='/statistics' element={<Paper>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays}></CountdownTimer>
                    </Paper>} />
                    <Route path='/settings' element={<Paper><ProgressBar amount='70' label='Equindar' /></Paper>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import './assets/App.css';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory.tsx';
import CountdownTimer from './components/Countdown/CountdownTimer';
import { customTheme } from './assets/themes/customTheme';
import { Paper } from '@mui/material';
import Layout from './layouts/Layout';

function App() {
    const THREE_DAYS_IN_MS = 3 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout theme={customTheme} />}>
                    <Route path='/' />
                    <Route path='/explore' element={<Inventory />} />
                    <Route path='/statistics' element={<Paper>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays}></CountdownTimer>
                    </Paper>} />
                    <Route path='/settings' element={<Paper></Paper>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

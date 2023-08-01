import { CssBaseline, ThemeProvider } from '@mui/material';
import SideBarNavigation from './SideBarNavigation';
import AppHeader from './AppHeader';
import CharacterInfo from './CharacterInfo';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import ControlElements from './ControlElements';


const Layout = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            <CssBaseline enableColorScheme />
            <div className='App'>
                <header>
                    <AppHeader />
                </header>
                <main>
                    <SideBarNavigation />
                    <div className='test'>
                        <Outlet />
                    </div>
                    <CharacterInfo></CharacterInfo>
                </main>
                <footer className='footer'>
                    <ControlElements />
                </footer>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
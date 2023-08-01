import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MainNavigation from './MainNavigation';
import AccountButton from '../components/Account/AccountButton';
import NotificationButton from '../components/Notification/NotificationButton';
import { Box } from '@mui/material';

export default function AppHeader() {

    return (
        <AppBar position="static" className="App-header">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    LunarEclipse
                </Typography>
                <MainNavigation />
                <Box sx={{ flexGrow: 0 }}>
                    <NotificationButton count={4} />
                    <AccountButton name="Equindar" />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
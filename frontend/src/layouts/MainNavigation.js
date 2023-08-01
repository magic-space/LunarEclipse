import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { MainMenu } from '../data/MainMenu';

const MainNavigation = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {MainMenu.map((item) => (
                <Button
                    variant="outlined"
                    startIcon={item.icon}
                    key={item.id}
                >
                    {item.text}
                </Button>
            ))}
        </Box>
    );
};

export default MainNavigation;
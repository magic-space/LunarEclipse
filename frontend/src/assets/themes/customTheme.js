import { orange, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: orange,
        secondary: pink,

        background: {
            main: '#282C34',
        }
    },
});
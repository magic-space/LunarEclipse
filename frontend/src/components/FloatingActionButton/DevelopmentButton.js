import ApiIcon from '@mui/icons-material/Api';
import { Fab } from '@mui/material';

const DevelopmentButton = () => {
    return (
        <Fab variant="extended" color="primary" aria-label="dev-function" sx={{ m: 1 }} >
            <ApiIcon sx={{ mr: 1 }}/>
            DEV-Funktion
        </Fab>
    );
};

export default DevelopmentButton;
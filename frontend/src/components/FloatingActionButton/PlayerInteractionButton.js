import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab, Tooltip } from '@mui/material';

const PlayerInteractionButton = () => {
    return (
        <Tooltip title="Funktion nicht verfügbar">
            <Fab variant="extended" color="primary" aria-label="dev-function" disabled sx={{ m: 1 }} >
                <NavigationIcon sx={{ mr: 1 }} />
                Aktion
            </Fab>
        </Tooltip>
    );
};

export default PlayerInteractionButton;
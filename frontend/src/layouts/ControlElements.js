import { Box } from '@mui/material';
import DevelopmentButton from '../components/FloatingActionButton/DevelopmentButton';
import PlayerInteractionButton from '../components/FloatingActionButton/PlayerInteractionButton';

const ControlElements = () => {
    return (
        <Box>
            <PlayerInteractionButton></PlayerInteractionButton>
            <DevelopmentButton></DevelopmentButton>
        </Box>
    );
};

export default ControlElements;
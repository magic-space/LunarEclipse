import '../assets/App.css';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { NavLink } from 'react-router-dom';

const CharacterInfo = () => {
    return (
        <NavLink to='/profile'>
            <Card className='App-CharInfo' color='background.main'>
                <CardHeader
                    title={<Typography variant='h5'>Equindar</Typography>}
                    subheader="Level 10"
                />
                <CardContent>
                    <ProgressBar amount='78' label='LP: 78%' />
                </CardContent>
            </Card>
        </NavLink>
    );
};

export default CharacterInfo;
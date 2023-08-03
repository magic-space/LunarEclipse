import { Avatar, LinearProgress, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material';

const FighterListItem = props => {
    return (
        <ListItemButton>
            <ListItemAvatar>
                <Avatar>{props.avatar}</Avatar>
            </ListItemAvatar><ListItemText>
                <Typography>
                    {props.name}
                </Typography>
                <LinearProgress variant='determinate' value={100} />
            </ListItemText>
        </ListItemButton>
    );
};

export default FighterListItem;
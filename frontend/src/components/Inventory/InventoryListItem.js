import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Avatar, Typography, Chip, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PaletteIcon from '@mui/icons-material/Palette';

const InventoryListItem = props => {
    return (
        <ListItem
            inset
            secondaryAction={
                <IconButton edge="end" aria-label="actions">
                    <MoreVertIcon />
                </IconButton>
            }
        >
            <ListItemIcon>
                <Checkbox disableRipple></Checkbox>
            </ListItemIcon>
            <PaletteIcon fontSize='large' sx={{ mr: 2 }} />
            <ListItemText
                primary={props.name}
                secondary={
                    <>
                        <Typography
                            variant="body2"
                        >
                            {props.subtitle}
                        </Typography>
                        <Chip variant="filled" label={props.type} size="small" color="primary" sx={{ mr: 1 }}></Chip>
                        {props.label ? <Chip variant="outlined" avatar={<Avatar>Eq</Avatar>} label={props.label} size="small" /> : null}
                    </>
                }
            >
            </ListItemText>
            <Typography variant="body1">Goldwert: {props.value}</Typography>
        </ListItem>
    );
};

export default InventoryListItem;
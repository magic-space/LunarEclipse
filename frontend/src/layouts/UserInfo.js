import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { UserMenu } from '../data/UserMenu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export default function UserInfo() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <Tooltip title="Open Account Menu">
                <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                    <Avatar alt="Equindar" />
                </IconButton>
            </Tooltip>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {UserMenu.map(item => {
                    return <MenuItem key={item.id} onClick={handleClose}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </MenuItem>;
                })}
            </Menu>
        </Box>
    );
}
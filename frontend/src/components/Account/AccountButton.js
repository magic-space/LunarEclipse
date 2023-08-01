import { Tooltip, IconButton, Avatar, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { UserMenu } from '../../data/UserMenu';
import React from 'react';


const AccountButton = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip title="Account">
                <IconButton onClick={handleMenu} sx={{ p: 0 }} size="large">
                    <Avatar alt={props.name} />
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
        </>
    );
};

export default AccountButton;
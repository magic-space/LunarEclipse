import { Tooltip, IconButton, Badge, Menu, Card, CardHeader, CardContent, CardActions, Stack, Button, MenuItem } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import React from 'react';

const NotificationButton = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip title="Benachrichtigungen">
                <IconButton onClick={handleMenu} size="large" sx={{mr: 2}}>
                    <Badge badgeContent={props.count} color="primary">
                        <NotificationsOutlinedIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Menu className="NotificationMenu"
                id="menu-notification"
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
                <Card variant='outlined' color='background.main'>
                    <CardHeader>

                    </CardHeader>
                    <CardContent>
                        <Stack>
                            <MenuItem key="1" onClick={handleClose}>Notification #1</MenuItem>
                            <MenuItem key="2" onClick={handleClose}>Notification #2</MenuItem>
                            <MenuItem key="3" onClick={handleClose}>Notification #3</MenuItem>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button size="small">als gelesen markieren</Button>
                    </CardActions>
                </Card>
            </Menu>
        </>
    );
};

export default NotificationButton;
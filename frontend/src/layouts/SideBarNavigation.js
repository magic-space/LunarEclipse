import styles from '../assets/SideBarNavigation.module.css';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ApiIcon from '@mui/icons-material/Api';
import { SideBar } from '../data/SideBar';
import { useState } from 'react';
import { Collapse, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';

export default function SideBarNavigation() {
    const [open, setopen] = useState(true);
    const toggleOpen = () => {
        setopen(!open);
    };

    return (
        <div className={open ? styles.sidenav : styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={toggleOpen}>
                {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
            </button>
            {SideBar.map(item => {
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                    {item.icon}
                    <span className={styles.linkText}>{item.text}</span>
                </NavLink>;
            })}
            <List sx={{ bgcolor: 'primary.main', p: 0 }}>
                <ListItemButton onClick={toggleOpen}>
                    <ListItemIcon>
                        <ApiIcon />
                    </ListItemIcon>
                    <ListItemText primary="DEV Area" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </List>
            <Collapse in={open} timeout='auto'>
                <List>
                    <NavLink key="dev" to="dev-settings" className={styles.sideitem}>
                        <ListItem>
                            <ListItemText primary='Einstellungen' />
                        </ListItem>
                    </NavLink>
                </List>
            </Collapse>
        </div>
    );
}

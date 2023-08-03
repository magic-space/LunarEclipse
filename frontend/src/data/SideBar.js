import PublicIcon from '@mui/icons-material/Public';
import InventoryIcon from '@mui/icons-material/Inventory';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
export const SideBar = [
    {
        id: 0,
        icon: <PublicIcon/>,
        text: 'Karte',
        link: '/'
    },
    {
        id: 1,
        icon: <InventoryIcon />,
        text: 'Inventar',
        link: 'inventory'
    },
    {
        id: 2,
        icon: <BarChartIcon/>,
        text: 'Statistics',
        link: 'statistics'
    },
    {
        id: 3,
        icon: <SettingsIcon/>,
        text: 'Settings',
        link: 'settings'
    }
];
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
export const UserMenu = [
	{
		id: 0,
		icon: <AccountCircle />,
		text: 'Account',
		link: 'account'
	},
	{
		id: 1,
		icon: <SettingsIcon/>,
		text: 'Settings',
		link: 'settings'
	},
	{
		id: 2,
		icon: <LogoutIcon/>,
		text: 'Logout',
		link: 'logout'
	}
];
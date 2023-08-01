import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SvgIcon from '@mui/material/SvgIcon';
import Discord from '../assets/svg/discord.svg';

export const MainMenu = [
	{
		id: 1,
		icon: <AutoStoriesIcon />,
		text: 'WIKI',
		link: 'wiki'
	},
	{
		id: 2,
		icon: <QuestionAnswerIcon />,
		text: 'CHAT',
		link: 'chat'
	},
	{
		id: 3,
		icon: <SvgIcon>{Discord}</SvgIcon>,
		text: 'DISCORD',
		link: 'discord'
	}
];
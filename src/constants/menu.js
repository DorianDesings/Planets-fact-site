import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

export const MENUS = [
	{
		id: v4(),
		text: 'mercury',
		link: '/mercury',
		color: COLORS.mercury
	},
	{
		id: v4(),
		text: 'venus',
		link: '/venus',
		color: COLORS.venus
	},
	{
		id: v4(),
		text: 'earth',
		link: '/earth',
		color: COLORS.earth
	},
	{
		id: v4(),
		text: 'mars',
		link: '/mars',
		color: COLORS.mars
	},
	{
		id: v4(),
		color: COLORS.jupiter,
		text: 'jupiter'
	},
	{
		id: v4(),
		color: COLORS.saturn,
		text: 'saturn'
	},
	{
		id: v4(),
		color: COLORS.uranus,
		text: 'uranus'
	},
	{
		id: v4(),
		color: COLORS.neptune,
		text: 'neptune'
	}
];

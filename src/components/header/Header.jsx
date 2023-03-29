import { useState } from 'react';
import Menu from '../menu/Menu';
import { StyledHeader, StyledHeaderTop } from './styles';

const Header = () => {
	const [open, setOpen] = useState(true);
	return (
		<StyledHeader>
			<StyledHeaderTop>
				<h1>THE PLANETS</h1>
				<img
					onClick={() => setOpen(!open)}
					src='/public/images/icon-hamburger.svg'
					alt=''
				/>
			</StyledHeaderTop>
			<Menu open={open} />
		</StyledHeader>
	);
};

export default Header;

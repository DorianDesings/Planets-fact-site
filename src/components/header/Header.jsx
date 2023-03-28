import Menu from '../menu/Menu';
import { StyledHeader } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<h1>THE PLANETS</h1>
			<Menu />
		</StyledHeader>
	);
};

export default Header;

import { MENUS } from '../../constants/menu';
import { StyledLink, StyledMenu, StyledMenuItem } from './styles';

const Menu = ({ open }) => {
	return (
		<nav>
			<StyledMenu open={open}>
				{MENUS.map(menu => {
					return (
						<StyledMenuItem key={menu.idMenu}>
							<StyledLink to={menu.link} color={menu.color}>
								{menu.text}
							</StyledLink>
						</StyledMenuItem>
					);
				})}
			</StyledMenu>
		</nav>
	);
};

export default Menu;

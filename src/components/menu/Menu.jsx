import { MENUS } from '../../constants/menu';
import { StyledLink, StyledMenu, StyledMenuItem } from './styles';

const Menu = () => {
	return (
		<nav>
			<StyledMenu>
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

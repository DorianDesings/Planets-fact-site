import { MENUS } from '../../constants/menus';
import { StyledLink, StyledMenu } from './styles';

const Menu = () => {
	return (
		<nav>
			<StyledMenu>
				{MENUS.map(menu => {
					return (
						<li>
							<StyledLink to={menu.link} color={menu.color}>
								{menu.text}
							</StyledLink>
						</li>
					);
				})}
			</StyledMenu>
		</nav>
	);
};

export default Menu;

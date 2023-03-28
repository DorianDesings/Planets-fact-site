import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 1.5rem;
	font-size: 0.65rem;
	font-weight: 700;
	text-transform: uppercase;
`;

const StyledLink = styled(NavLink)`
	color: white;
	&.active {
		color: ${({ color }) => color};
	}
`;

export { StyledMenu, StyledLink };

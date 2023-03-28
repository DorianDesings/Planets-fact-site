import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const { bgColor } = COLORS;

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1px 2rem;
	height: 85px;
	background-color: ${bgColor};
`;

export { StyledHeader };

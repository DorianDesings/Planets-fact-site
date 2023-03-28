import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const { bgColor } = COLORS;

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	flex-direction: start;
	padding: 1px 0;
	height: 85px;
	background-color: ${bgColor};
`;

export { StyledHeader };

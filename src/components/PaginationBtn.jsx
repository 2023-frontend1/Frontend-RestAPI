import styled from 'styled-components'
import { color, fontSize, fontWeight } from '../styles/themes/@index'

const PaginationBtn = ({ text = 1, ...rest }) => {
	return <S.But_Button {...rest}>{text}</S.But_Button>
}
export default PaginationBtn

const But_Button = styled.button`
	width: 5rem;
	height: fit-content;
	padding: 1rem;
	text-align: center;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
	border: 1px solid ${color.grayScale[0]};
	background-color: ${color.grayScale[80]};
	&:hover {
		cursor: pointer;
		background-color: ${color.grayScale[60]};
	}
`
const S = {
	But_Button,
}

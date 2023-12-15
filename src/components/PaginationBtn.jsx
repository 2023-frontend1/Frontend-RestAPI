import styled from 'styled-components'
import { color, fontSize, fontWeight } from '../styles/themes/@index'
const PaginationBtn = ({ number }) => {
	return <S.But_Button onClick={() => {}}>{number}</S.But_Button>
}
export default PaginationBtn

const But_Button = styled.button`
	width: 3rem;
	height: fit-content;
	padding: 1rem;
	text-align: center;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.bold};
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

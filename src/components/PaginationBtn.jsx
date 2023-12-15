import styled from 'styled-components'
import { flexAlign, fontSize, fontWeight } from '../styles/themes/@index'

const PaginationBtn = () => {
	return (
		<S.Div_BtnWrap>
			<S.But_Button>{`${'<<'}`}</S.But_Button>
			<S.But_Button>{`${'<'}`}</S.But_Button>
			<S.But_Button>1</S.But_Button>
			<S.But_Button>2</S.But_Button>
			<S.But_Button>3</S.But_Button>
			<S.But_Button>4</S.But_Button>
			<S.But_Button>5</S.But_Button>
			<S.But_Button>6</S.But_Button>
			<S.But_Button>7</S.But_Button>
			<S.But_Button>8</S.But_Button>
			<S.But_Button>9</S.But_Button>
			<S.But_Button>10</S.But_Button>
			<S.But_Button>{`${'>'}`}</S.But_Button>
			<S.But_Button>{`${'>>'}`}</S.But_Button>
		</S.Div_BtnWrap>
	)
}
export default PaginationBtn
const Div_BtnWrap = styled.div`
	${flexAlign.flexCenter}
`

const But_Button = styled.button`
	margin: 1rem;
	padding: 1rem;
	font-size: ${fontSize.large};
	font-weight: ${fontWeight.bold};
	border: 0;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`

const S = {
	Div_BtnWrap,
	But_Button,
}

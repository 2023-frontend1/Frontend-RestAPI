import styled from 'styled-components'
import { color, flexAlign, fontSize, fontWeight } from '../styles/themes/@index'

const Header = () => {
	return (
		<S.Div_HeaderWrap>
			<S.H1_Text> 🎣 FrontEnd Rest-API</S.H1_Text>
		</S.Div_HeaderWrap>
	)
}
export default Header

const Div_HeaderWrap = styled.div`
	${flexAlign.flexCenter}
	width: 100%;
	height: 20%;
	border-bottom: 0.1rem solid ${color.grayScale[80]};
`

const H1_Text = styled.h1`
	font-size: ${fontSize.huge};
	font-weight: ${fontWeight.bold};
`

const S = {
	Div_HeaderWrap,
	H1_Text,
}

import styled from 'styled-components'
import color from '../styles/themes/Color'

const Loading = () => {
	return (
		<S.Div_Wrapper>
			<h1>아.. 하고 있다고요오오ㅗ오 😡</h1>
		</S.Div_Wrapper>
	)
}

export default Loading

const Div_Wrapper = styled.div`
	width: 100%;
	height: 80vh;
	text-align: center;
	background-color: ${color.red[100]};
	color: ${color.grayScale[80]};
`

const S = {
	Div_Wrapper,
}

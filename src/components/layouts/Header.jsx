import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
	color,
	fontSize,
	fontWeight,
	flexAlign,
} from '../../styles/themes/@Index'
import logo from '/logo.png'

const Header = () => {
	const navigate = useNavigate()
	const OnClick = (path) => {
		navigate(path)
	}

	return (
		<S.Div_HeaderContain>
			<S.Div_HeaderTitle
				onClick={() => {
					OnClick('/')
				}}
			>
				<S.Img_Logo src={logo} />
				<S.P_MainPage> Issue </S.P_MainPage>
			</S.Div_HeaderTitle>
		</S.Div_HeaderContain>
	)
}
export { Header }

const Div_HeaderContain = styled.div`
	width: 100vw;
	top: 0px;
	background-color: ${color.grayScale[80]};
	position: absolute;
`

const P_MainPage = styled.li`
	margin-right: 3rem;
	font-size: ${fontSize.small};
	font-weight: ${fontWeight.bold};
	color: ${color.grayScale[40]};
	&:hover {
		color: ${color.grayScale[20]};
	}
`
const Img_Logo = styled.img`
	width: 5rem;
	height: 5rem;
	margin-right: 1.5rem;
`

const Div_HeaderTitle = styled.div`
	${flexAlign.flexCenter};
	margin: 1rem;
	left: -84rem;
	position: relative;
	cursor: pointer;
`

const S = {
	Div_HeaderContain,
	P_MainPage,
	Img_Logo,
	Div_HeaderTitle,
}

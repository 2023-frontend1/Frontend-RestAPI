import styled from 'styled-components'
import { Header, IssueBox, PaginationBtn } from './components/@index'
import flexAlign from '../styles/themes/FlexAlign'
function MainPage() {
	return (
		<S.Div_AlignWrap>
			<S.Div_HeaderWrap>
				<Header />
			</S.Div_HeaderWrap>
			<S.Div_IuuseWrap>
				<IssueBox />
				<IssueBox />
				<IssueBox />
				<IssueBox />
				<IssueBox />
				<IssueBox />
				<IssueBox />
				<IssueBox />
			</S.Div_IuuseWrap>
			<S.Div_BtnWrap>
				<PaginationBtn />
			</S.Div_BtnWrap>
		</S.Div_AlignWrap>
	)
}

export default MainPage

const Div_AlignWrap = styled.div`
	${flexAlign.flexCenter}
	${flexAlign.directionColumn}
`
const Div_HeaderWrap = styled.div`
	width: 100%;
`

const Div_IuuseWrap = styled.div`
	${flexAlign.justifyBetween}
	width: 90%;
	flex-wrap: wrap;
`
const Div_BtnWrap = styled.div`
	width: 100%;
`
const S = {
	Div_AlignWrap,
	Div_HeaderWrap,
	Div_IuuseWrap,
	Div_BtnWrap,
}

import styled from 'styled-components'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index'

const IssueBox = () => {
	return (
		<S.Div_Wrapper>
			<S.Div_IssueId>이슈 아이디</S.Div_IssueId>
			<S.H1_Title>이슈제목</S.H1_Title>
			<S.Div_CommentsNumber>코멘트 숫자</S.Div_CommentsNumber>
			<S.Div_Writter>유저 닉네임</S.Div_Writter>
			<S.Div_CreatedTime>생성일자</S.Div_CreatedTime>
		</S.Div_Wrapper>
	)
}
export default IssueBox

const Div_Wrapper = styled.div`
	position: relative;
	border: 3px solid ${color.red[100]};
	width: 48%;
	height: 15rem;
	margin: 3rem 0px;
	${flexAlign.flexCenter}
`

const Div_IssueId = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.bold};
`
const H1_Title = styled.h1`
	font-size: ${fontSize.large};
	font-weight: ${fontWeight.bold};
`
const Div_CommentsNumber = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.regular};
`
const Div_CreatedTime = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.regular};
`

const Div_Writter = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.regular};
`

const S = {
	Div_Wrapper,
	Div_IssueId,
	H1_Title,
	Div_CommentsNumber,
	Div_CreatedTime,
	Div_Writter,
}

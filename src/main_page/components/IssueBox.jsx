import styled from 'styled-components'
import useIssue from '../../hooks/UseIssue'
import {
	color,
	flexAlign,
	fontSize,
	fontWeight,
} from '../../styles/themes/@index'
const IssueBox = () => {
	const issues = useIssue()
	return (
		<>
			{issues.map((issue, idx) => {
				return (
					<S.Div_Wrapper key={idx}>
						<S.Div_IssueId>ID:#{issue.id}</S.Div_IssueId>
						<S.H1_Title>{issue.title}</S.H1_Title>
						<S.Div_CommentsNumber>
							comments:{`${issue.comments}`}
						</S.Div_CommentsNumber>
						<S.Div_Writter>작성자 : {issue.user.login}</S.Div_Writter>
						<S.Div_CreatedTime>
							created_at :{issue.created_at}
						</S.Div_CreatedTime>
					</S.Div_Wrapper>
				)
			})}
		</>
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

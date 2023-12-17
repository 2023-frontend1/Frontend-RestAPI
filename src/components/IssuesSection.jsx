import styled from 'styled-components'
import useIssue from '../hooks/UseIssue'
import { flexAlign } from '../styles/themes/@index'
import IssueBox from './IssueBox'
const IssuesSection = ({ page, perPage, sort }) => {
	const { issues } = useIssue(page, perPage, sort)
	return (
		<S.Div_IssueWrap>
			{issues.map((issue, idx) => {
				return (
					<IssueBox
						key={idx}
						id={issue.id}
						title={issue.title}
						numComments={issue.comments}
						author={issue.user.login}
						createAt={issue.created_at}
					/>
				)
			})}
		</S.Div_IssueWrap>
	)
}
export default IssuesSection

const Div_IssueWrap = styled.div`
	${flexAlign.justifyBetween}
	width: 80%;
	flex-wrap: wrap;
`

const S = {
	Div_IssueWrap,
}

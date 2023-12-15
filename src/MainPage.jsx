import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Header, IssueBox, PaginationBtn } from './components/@index'
import useIssue from './hooks/UseIssue'
import flexAlign from './styles/themes/FlexAlign'

function MainPage() {
	const totPage = 10

	const [queryParam, setQueryParam] = useSearchParams({
		page: 1,
		perPage: 10,
		sort: 'created',
	})

	const issues = useIssue(
		queryParam.get('page'),
		queryParam.get('perPage'),
		queryParam.get('sort')
	)

	const onChangeParam = (key, value) => {
		queryParam.set(key, value)
		setQueryParam(queryParam)
	}

	const onChangePageFirst = () => {
		onChangeParam('page', 1)
	}
	const onChangePagePrev = () => {
		const prevPage =
			queryParam.get('page') - 1 > 0 ? queryParam.get('page') - 1 : 1
		onChangeParam('page', prevPage)
	}
	const onChangePageNext = () => {
		const nextPage =
			queryParam.get('page') + 1 <= totPage
				? queryParam.get('page') + 1
				: totPage
		onChangeParam('page', nextPage)
	}

	const onChangePageLast = () => {
		onChangeParam('page', totPage)
	}

	return (
		<S.Div_AlignWrap>
			<S.Div_HeaderWrap>
				<Header />
			</S.Div_HeaderWrap>

			<></>

			<S.Div_IssueWrap>
				{issues.map((issue) => {
					return (
						<IssueBox
							key={issue.id}
							id={issue.id}
							title={issue.title}
							numComments={issue.comments}
							author={issue.user.id}
							createAt={issue.created_at}
						/>
					)
				})}
			</S.Div_IssueWrap>

			<S.Div_BtnWrap>
				<PaginationBtn text="맨 처음" onClick={onChangePageFirst} />
				<PaginationBtn text="이전" onClick={onChangePagePrev} />

				{new Array(10).fill(0).map((_, idx) => {
					return (
						<PaginationBtn
							key={idx}
							text={idx + 1}
							onClick={() => {
								onChangeParam('page', idx + 1)
							}}
						/>
					)
				})}

				<PaginationBtn text="다음" onClick={onChangePageNext} />
				<PaginationBtn text="맨 끝" onClick={onChangePageLast} />
			</S.Div_BtnWrap>
		</S.Div_AlignWrap>
	)
}

export default MainPage

const Div_AlignWrap = styled.div`
	${flexAlign.flexCenter}
	${flexAlign.directionColumn}
	padding-bottom: 1rem;
`
const Div_HeaderWrap = styled.div`
	width: 100%;
`

const Div_IssueWrap = styled.div`
	${flexAlign.justifyBetween}
	width: 60%;
	flex-wrap: wrap;
`
const Div_BtnWrap = styled.div`
	width: 100%;
	${flexAlign.flexCenter}
	gap: 5px;
`

const S = {
	Div_AlignWrap,
	Div_HeaderWrap,
	Div_IssueWrap,
	Div_BtnWrap,
}

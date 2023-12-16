import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Header, PaginationBtn } from './components/@index'
import color from './styles/themes/Color'
import flexAlign from './styles/themes/FlexAlign'
import IssuesSection from './components/IssuesSection'

function MainPage() {
	const totPage = 10

	const [queryParam, setQueryParam] = useSearchParams({
		page: 1,
		perPage: 10,
		sort: 'created',
	})

	const onChangeParam = (key, value) => {
		queryParam.set(key, value)
		setQueryParam(queryParam)
	}
	/** 페이지 이동 함수 */
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
			<span>
				<CircleBtn
					onClick={() => {
						onChangeParam('sort', 'created')
					}}
				>
					생성 순
				</CircleBtn>
				<CircleBtn
					onClick={() => {
						onChangeParam('sort', 'updated')
					}}
				>
					업데이트 순
				</CircleBtn>
				<CircleBtn
					onClick={() => {
						onChangeParam('sort', 'comments')
					}}
				>
					코멘트 순
				</CircleBtn>
			</span>
			<IssuesSection
				page={queryParam.get('page')}
				perPage={queryParam.get('perPage')}
				sort={queryParam.get('sort')}
			/>
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

const Div_BtnWrap = styled.div`
	width: 100%;
	${flexAlign.flexCenter}
	gap: 5px;
`

const CircleBtn = styled.button`
	width: 15rem;
	border: 2px solid ${color.grayScale[0]};
	border-radius: 100rem;
	background-color: ${color.grayScale[100]};
	color: ${color.grayScale[0]};
	text-align: center;

	&:hover {
		background-color: ${color.grayScale[0]};
		color: ${color.grayScale[100]};
	}
`

const S = {
	Div_AlignWrap,
	Div_HeaderWrap,
	Div_BtnWrap,
	CircleBtn,
}

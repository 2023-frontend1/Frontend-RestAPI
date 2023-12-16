import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Header, Pagination } from './components/@index'
import IssuesSection from './components/IssuesSection'
import color from './styles/themes/Color'
import flexAlign from './styles/themes/FlexAlign'

function MainPage() {
	const [queryParam, setQueryParam] = useSearchParams({
		page: 1,
		perPage: 10,
		sort: 'created',
	})

	const onChangeParam = (key, value) => {
		queryParam.set(key, value)
		setQueryParam(queryParam)
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
			<Pagination
				numTotalPagesAtOnce={10}
				curPage={+queryParam.get('page')}
				lastPage={20}
				onChangePage={onChangeParam}
			/>
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

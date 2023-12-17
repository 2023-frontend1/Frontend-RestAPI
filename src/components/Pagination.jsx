import { styled } from 'styled-components'
import { color, flexAlign, fontSize, fontWeight } from '../styles/themes/@index'

/**
 * @component
 * @param {Object} PageNation_Props
 * @param {Number} [PageNation_Props.numTotalPagesAtOnce=10] - 한번에 보여지는 연속된 숫자들의 갯수.
 * @param {Number} [PageNation_Props.curPage=1] - Pagination Component 에서 강조 효과가 있는 현재 page 번호. (상태를 입력)
 * @param {Number} [PageNation_Props.lastPage=10] - 마지막 페이지 번호.
 * @param {Function} PageNation_Props.setCurPage - curPage 를 변경할 **상태변화 함수** ( ex, curPage 를 2로 변경할 경우 => curPage(2) ).
 * @returns {JSX.Element}
 *
 * @description
 * - 이동할 수 있는 페이지 번호 목록을 출력합니다.
 * - 아래와 같이 출력됩니다.
 * - `[맨 처음] [이전] [1] [2] ..... [9] [10] [다음] [맨 끝]`
 *
 * @example
 * <Pagination
 *   numTotalPagesAtOnce={5}
 *   curPage={page}
 *   lastPage={10}
 *   setCurPage={(forwardPage)=>setPage(forwardPage)}
 * />
 *
 * @author yunshin
 */
const Pagination = ({
	numTotalPagesAtOnce = 10,
	curPage = 1,
	lastPage = 10,
	setCurPage,
}) => {
	if (curPage < 1) curPage = 1
	if (curPage > lastPage) curPage = lastPage

	/**
	 * @description
	 * - 화면에 비춰지는 페이지 번호 목록의 가장 첫 페이지 번호
	 *
	 * @example
	 * - curPage == 5 & numTotalPagesAtOnce == 10 인 경우 => startPage = 1
	 * - curPage == 7 & numTotalPagesAtOnce == 5 인 경우 => startPage = 6
	 * - curPage == 11 & numTotalPagesAtOnce == 5 인 경우 => startPage = 11
	 */
	const startPage = Math.floor((curPage - 1) / numTotalPagesAtOnce) * 10

	const onClickPageNumBtn = (targetPage) => {
		setCurPage(targetPage)
	}
	const onClickGoFirstPageBtn = () => {
		setCurPage(1)
	}
	const onClickGoPrevPageBtn = () => {
		const prevPage = curPage === 1 ? 1 : curPage - 1
		setCurPage(prevPage)
	}
	const onClickGoNextPageBtn = () => {
		const nextPage = curPage === lastPage ? lastPage : curPage + 1
		setCurPage(nextPage)
	}
	const onClickGoLastPageBtn = () => {
		setCurPage(lastPage)
	}

	return (
		<S.Div_Wrapper>
			<S.But_Button onClick={onClickGoFirstPageBtn}>맨 처음</S.But_Button>
			<S.But_Button onClick={onClickGoPrevPageBtn}>이전</S.But_Button>
			{Array(numTotalPagesAtOnce)
				.fill(0)
				.map((_, idx) => {
					const pageNum = startPage + idx + 1
					return (
						<S.But_Button
							key={idx}
							$isActive={curPage === pageNum}
							onClick={() => {
								onClickPageNumBtn(pageNum)
							}}
						>
							{pageNum}
						</S.But_Button>
					)
				})}
			<S.But_Button onClick={onClickGoNextPageBtn}>다음</S.But_Button>
			<S.But_Button onClick={onClickGoLastPageBtn}>맨 끝</S.But_Button>
		</S.Div_Wrapper>
	)
}

export default Pagination

const Div_Wrapper = styled.div`
	width: 100%;
	height: 10%;
	${flexAlign.flexCenter}
	gap: 5px;
`

const But_Button = styled.button`
	width: 5rem;
	height: fit-content;
	padding: 1rem;
	text-align: center;
	font-size: ${fontSize.tiny};
	font-weight: ${fontWeight.thin};
	border: 1px solid ${color.grayScale[0]};
	background-color: ${({ $isActive }) =>
		$isActive ? color.orange[100] : color.grayScale[80]};
	&:hover {
		cursor: pointer;
		background-color: ${color.grayScale[60]};
	}
`
const S = {
	Div_Wrapper,
	But_Button,
}

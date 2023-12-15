import styled from 'styled-components'
import { flexAlign, fontSize, fontWeight } from '../styles/themes/@index'
import { useDispatch } from 'react-redux'
import { reload } from '../slice/IssueListSlice'
import getIssuesList from '../apis/Issues'
import { useRef } from 'react'
const PaginationBtn = () => {
	const dispatch = useDispatch()
	const curPage = useRef(1)
	const curPerPage = useRef(10)
	const curSort = useRef('created')

	const fetchIssueBox = (page, perPage, sort) => {
		const fetchNRegisterIssueList = async () => {
			let issueList = []
			try {
				issueList = await getIssuesList(page, perPage, sort)
			} catch {
				issueList = []
			}
			dispatch(reload(issueList))
		}
		fetchNRegisterIssueList()
	}

	const onClickNumBtn = (page) => {
		curPage.current = page
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClickNextBtn = () => {
		curPage.current += 1
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClickPrevBtn = () => {
		if (curPage.current === 1) return
		curPage.current -= 1
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClickStartPointBtn = () => {
		curPage.current = 1
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClickEndPointBtn = () => {
		curPage.current = 10
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClickCreatedBtn = () => {
		curSort.current = 'created'
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClickUpdatedBtn = () => {
		curSort.current = 'updated'
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClickCommentsBtn = () => {
		curSort.current = 'comments'
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClick10ListBtn = () => {
		curPerPage.current = 10
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClick20ListBtn = () => {
		curPerPage.current = 20
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}
	const onClick50ListBtn = () => {
		curPerPage.current = 50
		fetchIssueBox(curPage.current, curPerPage.current, curSort.current)
	}

	return (
		<S.Div_BtnWrap>
			<S.But_Button onClick={onClick10ListBtn}>10개씩보기</S.But_Button>
			<S.But_Button onClick={onClick20ListBtn}>20개씩보기</S.But_Button>
			<S.But_Button onClick={onClick50ListBtn}>50개씩보기</S.But_Button>
			<S.But_Button onClick={onClickStartPointBtn}>{`${'<<'}`}</S.But_Button>
			<S.But_Button onClick={onClickPrevBtn}>{`${'<'}`}</S.But_Button>
			{Array(10)
				.fill(0)
				.map((_, idx) => {
					return (
						<S.But_Button
							key={idx}
							onClick={() => {
								onClickNumBtn(idx + 1)
							}}
						>
							{idx + 1}
						</S.But_Button>
					)
				})}
			<S.But_Button onClick={onClickNextBtn}>{`${'>'}`}</S.But_Button>
			<S.But_Button onClick={onClickEndPointBtn}>{`${'>>'}`}</S.But_Button>
			<S.But_Button onClick={onClickCreatedBtn}>생성순</S.But_Button>
			<S.But_Button onClick={onClickUpdatedBtn}>업데이트순</S.But_Button>
			<S.But_Button onClick={onClickCommentsBtn}>코멘트순</S.But_Button>
		</S.Div_BtnWrap>
	)
}
export default PaginationBtn
const Div_BtnWrap = styled.div`
	${flexAlign.flexCenter}
`

const But_Button = styled.button`
	margin: 1rem;
	padding: 1rem;
	font-size: ${fontSize.large};
	font-weight: ${fontWeight.bold};
	border: 0;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`

const S = {
	Div_BtnWrap,
	But_Button,
}

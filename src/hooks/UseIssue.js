import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getIssuesList from '../apis/Issues'
import { reload } from '../slice/IssueListSlice'

/** 
 * @typedef {Object} Issue
 * @property {Number} id - 이슈 id
 * @property {String} title - 제목
 * @property {String} body - 본문 내용
 * @property {"open"|"close"} state - 이슈 상태
 * @property {Number} comments - 해당 이슈에 달린 코멘트 수
 * @property {Label[]} labels - 이슈에 부여된 라벨의 배열
 * @property {String} html_url - 해당 이슈 깃허브 페이지 주소
 * @property {String} created_at - 이슈가 생성된 날 ( ex> 2023-12-15T02:25:11Z )
 * @property {String|null} updated_at - 최근 수정된 날 ( ex> 2023-12-15T02:25:11Z )
 * @property {String|null} closed_at - 이슈가 닫힌 날 ( ex> 2023-12-15T02:25:11Z )
 * @property {User} user
 * @property {*} etc.. 그외
 
 * @typedef {Object} Label
 * @property {Number} id - 라벨 id
 * @property {Boolean} default - 기본 라벨인지 여부
 * @property {String} name - 라벨 이름
 * @property {String} color - 라벨 색상
 * @property {String} description - 라벨 설명
 * @property {*} etc.. - 그 외

 * @typedef {Object} User
 * @property {Number} id - 해당 사용자 id
 * @property {String} html_url - 해당 사용자 깃허브 페이지 주소
 * @property {String} avatar_url - 사용자 프로필 사진으로 추정
 * @property {*} etc.. - 그 외
 */

/**
 * @author 이윤신
 * @param {Number} page pagination 번호 입니다.
 * @param {Number} perPage  특정 페이지에서 불러올 issue 갯수 입니다.
 * @param {"created" | "updated" | "comments"} sort 데이터 정렬 기준입니다.
 * @returns { Issue[] }
 * @description
 * - getIssuesList() 의 반환된 값을 전역상태 ("IssueList")로 등록합니다.
 * - 등록 과정에서 이전의 ("IssueList") 값은 삭제됩니다.
 * - 새로 등록된 전역상태 값을 반환합니다.
 * - API 호출과정에서 에러 발생 시, 빈 배열이 ("IssueList") 로 등록되어 반환됩니다.
 */
const useIssue = (page, perPage, sort) => {
	const dispatch = useDispatch()
	const issues = useSelector((state) => state.IssueList)

	useEffect(() => {
		const fetchNRegisterIssueList = async (page, perPage, sort) => {
			let issueList = []
			try {
				issueList = await getIssuesList(page, perPage, sort)
			} catch {
				issueList = []
			}
			dispatch(reload(issueList))
		}
		fetchNRegisterIssueList()
	}, [dispatch, page, perPage, sort])

	return issues
}

export default useIssue

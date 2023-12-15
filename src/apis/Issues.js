import axiosInstance from './Base'

/**
 * @author 최혜선
 *
 * @param {number} page pagination 번호 입니다.
 * @param {number} perPage 특정 페이지에서 불러올 issue 갯수 입니다.
 * @param {"created" | "updated" | "comments"} sort 데이터 정렬 기준입니다.
 */
const getIssuesList = async (page = 1, perPage = 10, sort = 'created') => {
	try {
		const response = await axiosInstance.get(
			`/repos/angular/angular-cli/issues`,
			{
				params: {
					page: page,
					per_page: perPage,
					sort: sort,
				},
			}
		)
		console.log(response.data)
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}
export default getIssuesList

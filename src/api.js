import axios from 'axios'

const getAllIssues = async (page, perPage) => {
	const BASE_URL = 'https://api.github.com'
	const OWNER = 'angular'
	const REPO = 'angular-cli'
	try {
		const response = await axios.get(
			`${BASE_URL}/repos/${OWNER}/${REPO}/issues`,
			{
				params: {
					page: page,
					per_page: perPage,
				},
			}
		)

		const listData = response.data.map((issue) => ({
			id: issue.id,
			title: issue.title,
			date: issue.created_at,
			content: issue.body,
			comments: issue.comments,
		}))

		console.log(response.data)
		console.log(listData)
		return listData
	} catch (error) {
		console.log(error)
	}
}
export { getAllIssues }

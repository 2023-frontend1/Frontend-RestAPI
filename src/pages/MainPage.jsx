import { useEffect } from 'react'
import { getAllIssues } from '../api'

const MainPage = () => {
	useEffect(() => {
		const getData = async () => {
			const data = await getAllIssues(1, 10)
			console.log(data)
		}
		getData()
	}, [])

	return <div>console</div>
}
export { MainPage }

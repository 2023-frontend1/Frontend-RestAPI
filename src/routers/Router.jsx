import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import Layout from '../components/layouts/layout'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
		],
	},
])

export default Router

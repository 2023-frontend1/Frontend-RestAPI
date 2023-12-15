import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './MainPage.jsx'
import Store from './store/Store.js'
import GlobalStyles from './styles/GlobalStyles.jsx'

const router = createBrowserRouter([
	{
		path: '',
		element: <MainPage />,
	},
	{
		path: '*',
		element: <div>🖕</div>,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={Store}>
		<GlobalStyles />
		<RouterProvider router={router} />
	</Provider>
)

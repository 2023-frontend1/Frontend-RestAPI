import { RouterProvider } from 'react-router-dom'
import Router from './Router'
import GlobalStyles from './styles/GlobalStyles'

function App() {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={Router} />
		</>
	)
}
export default App

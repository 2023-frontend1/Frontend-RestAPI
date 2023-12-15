import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import MainPage from './MainPage.jsx'
import Store from './store/Store.js'
import GlobalStyles from './styles/GlobalStyles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={Store}>
			<GlobalStyles />
			<MainPage />
		</Provider>
	</React.StrictMode>
)

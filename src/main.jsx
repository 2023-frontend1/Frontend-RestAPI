import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles.jsx'
import MainPage from './main_page/MainPage.jsx'
import { Provider } from 'react-redux'
import Store from './store/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={Store}>
			<GlobalStyles />
			<MainPage />
		</Provider>
	</React.StrictMode>
)

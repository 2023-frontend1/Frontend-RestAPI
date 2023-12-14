import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles.jsx'
import MainPage from './main_page/MainPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalStyles />
		<MainPage />
	</React.StrictMode>
)

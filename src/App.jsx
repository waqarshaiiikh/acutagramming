import './App.css'
import Header, { HeaderStyle } from './Pages/CommonComponents/Header';
import Home from './Pages/Home/Home';
import { FooterStyle } from './Pages/CommonComponents/Footer'
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

const commonTheme = {
	fontSizeSmall: '14px', 
	fontSizeNormal: '16px',
	fontSizeLarge:'17px',
	fontSizeExtraLarge:'18px',

	fontBlack: '2B2B2B',
	contrast: '#FFF',
	none: 'none',
	yellow: '#FFC94E',
	black: '#202020',
	tabsColor: '#262E33',
}

function App() {


	return (
		<ThemeProvider theme={commonTheme}>
			<BrowserRouter>
				<Routes>
					<Route element={<>
						<HeaderStyle />
						{/* <Home/> */}
						<FooterStyle /></>} path="/" />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App

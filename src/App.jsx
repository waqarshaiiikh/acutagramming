import './App.css'
import { HeaderStyle } from './Pages/CommonComponents/Header';
import { FooterStyle } from './Pages/CommonComponents/Footer'
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Work from './Pages/Work/Work';
import Pricing from './Pages/Pricing/Pricing';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';

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
	maxWidth: '1140px',

}

function App() {

	return (
		<ThemeProvider theme={commonTheme}>
			<BrowserRouter>
				<Routes>
					<Route element={<>
						<HeaderStyle />
						<Home/>
						<FooterStyle />
						</>} path="/" />
					<Route element={<About/>} path="/About" />
					<Route element={<Work/>} path="/Work" />
					<Route element={<Pricing/>} path="/Pricing" />
					<Route element={<><HeaderStyle /><Privacy/><FooterStyle /></>} path="/Privacy" />
					<Route element={<><HeaderStyle /><Terms/><FooterStyle /></>} path="/Terms" />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App

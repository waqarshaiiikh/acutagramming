import './App.css'
import Header from './Pages/CommonComponents/Header';
import Home from './Pages/Home/Home';
import {FooterStyle} from './Pages/CommonComponents/Footer'
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
			<Routes>
				<Route element={<>{/* <Header /> */}{/* <Home/> */}<FooterStyle/></>} path="/" />
			</Routes>
    </BrowserRouter>
  );
}

export default App

import './App.css';
import {Route, Routes} from "react-router-dom"
import { Authorized } from './components/views/Authorized';
import {Login} from './components/auth/Login'
import {Register} from './components/auth/Register'
import {NavBar} from './components/nav/NavBar';
import AppView from './components/AppView';
import { Title } from './Title';



const App = () => {
  return (
    <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<Title />
					<NavBar />
					<AppView />
				</>
			</Authorized>

		} />
	</Routes>
 );
}

export default App;

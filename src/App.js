import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import ParticleBG from './ParticleBG';

function App() {
	return (
		<>
			<ParticleBG />
			<div className='container'>
				<div className='glassy'>
					<SideBar />
					<div className='main-content'>
						<Navbar />
						<div className='content'>
							<Routes>
								<Route path='/' element={<About />} />
								<Route path='/about' element={<About />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

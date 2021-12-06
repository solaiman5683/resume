import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import SideBar from './Components/SideBar';
import ParticleBG from './ParticleBG';
import Blogs from './Components/Blogs';

function App() {
	return (
		<>
			<ParticleBG />
			<div className='main-container'>
				<div className='glassy'>
					<SideBar />
					<div className='main-content'>
						<Navbar />
						<div className='content'>
							<Routes>
								<Route path='/' element={<About />} />
								<Route path='/about' element={<About />} />
								<Route path='/contact' element={<Contact />} />
								<Route path='/projects' element={<Projects />} />
								<Route path='/blogs' element={<Blogs />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

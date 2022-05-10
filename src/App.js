import React from 'react'
import './App.scss';
import '../src/global.scss';
//Components
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<div className='app'>
			<NavBar />
			<div className='sections'>
				<Intro />
				<About />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes, BrowserRouter } from 'react-router-dom';



const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/dialogs/*" element={<Dialogs />} />
						<Route path="/profile" element={<Profile />} />
                        <Route path="/News" element={<News/>} />
                        <Route path="/Music" element={<Music/>} />
                        <Route path="/Settings" element={<Settings />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;

import HomePage from './HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employees from './Employees';
import Departments from './Departments';

function EmsApp() {
	return (
		<BrowserRouter>
			<div className="container">
				<h1 className="h1 bg-primary">EMS App</h1>
			</div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/employees" element={<Employees />} />
				<Route path="/departments" element={<Departments />} />
			</Routes>
		</BrowserRouter>
	);
}

export default EmsApp;

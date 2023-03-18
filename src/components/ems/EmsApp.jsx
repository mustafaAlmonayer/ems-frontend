import HomePage from './HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employees from './Employees';
import Departments from './Departments';
import DepartmentForm from './DepartmentForm';
import EmployeeForm from './EmployeeForm';

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
				<Route path="departments/:id" element={<DepartmentForm />} />
				<Route path="/employees/:id" element={<EmployeeForm />} />
			</Routes>
		</BrowserRouter>
	);
}

export default EmsApp;

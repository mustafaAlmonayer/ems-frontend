import { useState } from 'react';
import { useEffect } from 'react';
import { GetAllEmployees } from '../API/EmployeesService';

function Employees() {
	const [ employees, setEmployees ] = useState([]);

	useEffect(() => refreshEmployees, []);

	async function refreshEmployees() {
		await GetAllEmployees()
			.then((res) => {
				setEmployees(res.data);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="container">
			<h2 className="h2">All Employees</h2>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>id</th>
							<th>first name</th>
							<th>last name</th>
							<th>department name</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((employee) => (
							<tr key={employee.id}>
								<td>{employee.id}</td>
								<td>{employee.firstName}</td>
								<td>{employee.lastName}</td>
								<td>{employee.department == null ? 'no department' : employee.department.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Employees;

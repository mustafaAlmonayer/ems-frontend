import { useEffect, useState } from 'react';
import { GetAllDepartments } from '../API/DepartmentsService';

function Departments() {
	const [ departments, setDepartments ] = useState([]);

	useEffect(refreshDepartments, []);

	function refreshDepartments() {
		GetAllDepartments()
			.then((res) => {
				console.log(res);
				setDepartments(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="container">
			<h2 className="h2">All Departments</h2>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>id</th>
							<th>name</th>
							<th>manager id</th>
						</tr>
					</thead>
					<tbody>
						{departments.map((department) => (
							<tr key={department.id}>
								<td>{department.id}</td>
								<td>{department.name}</td>
								<td>{department.managerId == null ? 'no manager' : department.managerId}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Departments;

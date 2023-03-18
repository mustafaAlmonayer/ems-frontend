import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteEmployee, GetAllEmployees } from '../API/EmployeesService';

function Employees() {
	const [ employees, setEmployees ] = useState([]);

	useEffect(refreshEmployees, []);

	const navigate = useNavigate();

	function refreshEmployees() {
		GetAllEmployees()
			.then((res) => {
				setEmployees(res.data);
			})
			.catch((err) => console.log(err));
	}

	function add() {
		navigate('/employees/-1');
	}

	function update(id) {
		navigate(`/employees/${id}`);
	}

	function remove(id) {
		DeleteEmployee(id);
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
							<th>Manage</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((employee) => (
							<tr key={employee.id}>
								<td>{employee.id}</td>
								<td>{employee.firstName}</td>
								<td>{employee.lastName}</td>
								<td>{employee.department == null ? 'no department' : employee.department.name}</td>
								<td className="row">
									<div className="col">
										<button className="btn btn-success" onClick={() => update(employee.id)}>
											Update
										</button>
									</div>
									<div className="col">
										<button className="btn btn-danger" onClick={() => remove(employee.id)}>
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button className="btn btn-primary" onClick={add}>
					Add
				</button>
			</div>
		</div>
	);
}

export default Employees;

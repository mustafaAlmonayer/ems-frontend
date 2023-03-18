import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteDepartment, GetAllDepartments } from '../API/DepartmentsService';

function Departments() {
	const [ departments, setDepartments ] = useState([]);

	useEffect(refreshDepartments, []);

	const navigate = useNavigate();

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

	function addDepartment() {
		navigate('/departments/-1');
	}

	function update(id) {
		navigate(`/departments/${id}`);
	}
	function remove(id) {
		DeleteDepartment(id).then(() => {
			refreshDepartments();
		});
	}
	return (
		<div className="container">
			<h2 className="h2">All Departments</h2>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Manager ID</th>
							<th>Manage</th>
						</tr>
					</thead>
					<tbody>
						{departments.map((department) => (
							<tr key={department.id}>
								<td>{department.id}</td>
								<td>{department.name}</td>
								<td>{department.managerId == null ? 'no manager' : department.managerId}</td>
								<td className="row">
									<div className="col">
										<button className="btn btn-success" onClick={() => update(department.id)}>
											Update
										</button>
									</div>
									<div className="col">
										<button className="btn btn-danger" onClick={() => remove(department.id)}>
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<button className="btn btn-primary" onClick={addDepartment}>
				Add
			</button>
		</div>
	);
}

export default Departments;

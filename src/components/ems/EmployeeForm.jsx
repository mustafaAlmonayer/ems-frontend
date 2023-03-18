import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetDepartmentByName, SaveDepartment } from '../API/DepartmentsService';
import { GetEmployee, SaveEmployee, UpdateEmployee } from '../API/EmployeesService';

function EmployeeForm() {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ departmentName, setDepartmentName ] = useState('');

	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(getEmployee, []);

	function getEmployee() {
		if (id != -1) {
			GetEmployee(id).then((res) => {
				setFirstName(res.data.firstName);
				setLastName(res.data.lastName);
				if (res.department != null) {
					departmentName(res.data.department.name);
				}
			});
		}
	}

	async function onSubmit(values) {
		let employee = {
			firstName: values.firstName,
			lastName: values.lastName
		};

		if (values.departmentName != '') {
			await GetDepartmentByName(values.departmentName)
				.then((res) => {
					employee.department = {
						id: res.data.id,
						name: res.data.name
					};
				})
				.catch(() => {
					let department = {
						name: values.departmentName
					};
					SaveDepartment(department).then((res) => (employee.department.id = res.data.id));
					employee.department.name = values.name;
				});
		}

		if (id == -1) {
			SaveEmployee(employee);
		} else {
			employee.id = id;
			UpdateEmployee(employee);
		}

		navigate('/employees');
	}

	return (
		<div className="container">
			<h1>Add Employee</h1>
			<div>
				<Formik
					initialValues={{ firstName, lastName, departmentName }}
					enableReinitialize={true}
					onSubmit={onSubmit}
				>
					{(props) => (
						<Form>
							<fieldset className="form-group">
								<label>First Name</label>
								<Field type="text" name="firstName" className="form-control" />
							</fieldset>
							<fieldset className="form-group">
								<label>Last Name</label>
								<Field type="text" name="lastName" className="form-control" />
							</fieldset>
							<fieldset className="form-group">
								<label>Department Name</label>
								<Field type="text" name="departmentName" className="form-control" />
							</fieldset>
							<div className="m-3">
								<button className="btn btn-success" type="submit">
									save
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default EmployeeForm;

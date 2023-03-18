import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetDepartment, SaveDepartment, UpdateDepartment } from '../API/DepartmentsService';

function DepartmentForm() {
	const [ name, setName ] = useState('');

	const { id } = useParams();

	const [ managerId, setManagerId ] = useState(null);

	const navigate = useNavigate();

	useEffect(getDepartment, []);

	function getDepartment() {
		if (id != -1) {
			GetDepartment(id).then((res) => {
				setName(res.data.name);
				setManagerId(res.data.managerId);
			});
		}
	}

	function onSubmit(values) {
		if (id == -1) {
			const department = {
				name: values.name,
				managerId: values.managerId
			};
			SaveDepartment(department);
		} else {
			const department = {
				id: id,
				name: values.name,
				managerId: values.managerId
			};

			UpdateDepartment(department);
		}

		navigate('/departments');
	}

	return (
		<div className="container">
			<h1>add department</h1>
			<div>
				<Formik initialValues={{ name, managerId }} enableReinitialize={true} onSubmit={onSubmit}>
					{(props) => (
						<Form>
							<fieldset className="form-group">
								<label>Name</label>
								<Field type="text" name="name" className="form-control" />
							</fieldset>
							<fieldset className="form-group">
								<label>Manager Id</label>
								<Field type="number" name="managerId" className="form-control" />
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

export default DepartmentForm;

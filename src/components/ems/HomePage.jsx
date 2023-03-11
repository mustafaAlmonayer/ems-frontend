import { useNavigate } from 'react-router-dom';

function HomePage() {
	const navigate = useNavigate();

	return (
		<div className="container">
			<button className="btn btn-secondary m-3" onClick={() => navigate('/employees')}>
				Employees
			</button>
			<button className="btn btn-secondary m-3" onClick={() => navigate('/departments')}>
				Departments
			</button>
		</div>
	);
}

export default HomePage;

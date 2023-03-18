import { apiClient } from './ApiClient';

export function GetAllEmployees() {
	return apiClient.get('/employees/all');
}

export function GetEmployee(id) {
	return apiClient.get(`/employees/${id}`);
}

export function SaveEmployee(employee) {
	return apiClient.post('/employees/save', employee);
}

export function UpdateEmployee(employee) {
	return apiClient.put('/employees/update', employee);
}

export function DeleteEmployee(id) {
	return apiClient.delete(`/employees/${id}/delete`);
}

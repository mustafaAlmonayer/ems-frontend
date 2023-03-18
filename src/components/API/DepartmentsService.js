import { apiClient } from './ApiClient';

export function GetAllDepartments() {
	return apiClient.get('/departments/all');
}

export function SaveDepartment(department) {
	return apiClient.post('/departments/save', department);
}

export function DeleteDepartment(id) {
	console.log(id);
	return apiClient.delete(`/departments/${id}/delete`);
}

export function UpdateDepartment(department) {
	return apiClient.put(`/departments/update`, department);
}

export function GetDepartment(id) {
	return apiClient.get(`/departments/${id}`);
}

export function GetDepartmentByName(name) {
	return apiClient.get(`/departments/name/${name}`);
}

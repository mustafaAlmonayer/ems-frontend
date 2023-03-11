import { apiClient } from './ApiClient';

export function GetAllDepartments() {
	return apiClient.get('/departments/all');
}

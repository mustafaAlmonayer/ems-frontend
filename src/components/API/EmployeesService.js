import { apiClient } from './ApiClient';

export function GetAllEmployees() {
	return apiClient.get('/employees/all');
}

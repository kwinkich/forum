import $api from '../http';
import {AxiosResponse} from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export default class AuthService {
	static async login( userName:string, password: string): Promise<AxiosResponse<AuthResponse>>{
		return $api.post<AuthResponse>('/login', {userName, password})
	}

	static async registration( userName:string, password: string): Promise<AxiosResponse<AuthResponse>>{
		return  $api.post<AuthResponse>('/registration', {userName, password})
	}

	static async logout(): Promise<void>{
		return  $api.post('/logout')
	}
}

import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../service/AuthService";
import axios from 'axios';
import { API_URL } from '../http/index';
import { AuthResponse } from "../models/response/AuthResponse";
import { createContext, useContext } from "react";

export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setUserName(userName: string) { // Добавлен метод для установки userName
    this.user.userName = userName;
  }
	

  async login(userName: string, password: string) {
    try {
      const response = await AuthService.login(userName, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
			//this.setUserName(userName);
    } catch (err) {
      console.log(`ERR LOGIN ${err}`);

    }
  }

  async register(userName: string, password: string) {
    try {
      const response = await AuthService.registration( userName, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err) {
			alert('Ошибка регистрации!');
      console.log(`ERR REGISTER ${err}`);
    }
  }

  async logout() {
		this.setLoading(true);
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (err) {
      console.log(`ERR LOGOUT ${err}`);
    } finally{
			this.setLoading(false);
		}
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
      //console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    }	
  }
}

export const StoreContext = createContext(new Store());
export const useStore = () => useContext(StoreContext);

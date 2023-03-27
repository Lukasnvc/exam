import {User} from './userTypes'
import axios from "axios"

export const BASE_URL = 'https://autumn-delicate-wilderness.glitch.me/';
const REGISTER_URL = `${BASE_URL}v1/auth/register`;
const LOGIN_URL = `${BASE_URL}v1/auth/login`;

export const userRegister = (user: User): Promise<any> => {
  console.log(user)
  return axios.post(REGISTER_URL, user).then((response) => response.data)
}

export const userLogin = (user: User): Promise<any> => {

  return axios.post(LOGIN_URL, user).then((response) => response.data.token)
}

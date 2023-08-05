import axios from 'axios';
import { URL } from '../constants';
import { z } from 'zod';
import { signinSchema, signupSchema } from '../schema';

type signinForm = z.infer<typeof signinSchema>;
type signupForm = z.infer<typeof signupSchema>;

const config = {
  baseURL: 'http://localhost:3000/api/auth',
};

const signin = async (data: signinForm) => await axios.post(`${URL.SIGN_IN}`, { ...data }, config);

const singup = async (data: signupForm) => await axios.post(`${URL.SIGN_UP}`, { ...data }, config);

const singout = async () => await axios.get(`${URL.SIGN_OUT}`, config);

export { signin, singup, singout };

import axios from 'axios';
import { URL } from '../constants';
import { z } from 'zod';
import { signinSchema, signupSchema } from '../schema';

type signinForm = z.infer<typeof signinSchema>;
type signupForm = z.infer<typeof signupSchema>;

const config = {
  baseURL: 'http://localhost:3000/api/auth',
};

import { z } from 'zod';

const signinSchema = z.object({
  email: z.string().min(1, '필수 입력란 입니다.').email('이메일 형식에 맞게 입력해야 합니다.'),
  password: z
    .string()
    .min(1, '필수 입력란 입니다.')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
      '영문, 숫자, 특수문자(! @ # $ % & * ?)의 조합으로 8자 이상 20자 이하여야 합니다.'
    ),
});

const signupSchema = signinSchema
  .and(
    z.object({
      nickname: z.string().optional(),
      confirmPassword: z.string().min(1, '패스워드를 확인해 주세요'),
    })
  )
  .refine(data => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

export { signinSchema, signupSchema };

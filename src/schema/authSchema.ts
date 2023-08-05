import { z } from 'zod';

const signinSchema = z.object({
  email: z.string().min(1, '이메일을 입력해 주세요').email('이메일 형식에 맞게 입력해 주세요'),
  password: z
    .string()
    .min(1, '패스워드를 입력해 주세요')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
      '영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~20자리를 입력해주세요'
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

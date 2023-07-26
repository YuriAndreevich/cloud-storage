"use client";
import { LoginFormDTO, RegisterFormDTO } from "@/app/api/dto/auth.dto";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import * as Api from '@/app/api'
import { setCookie } from "nookies";

export const LoginForm = () => {
  const onSubmit: SubmitHandler<LoginFormDTO> = async (
    values: LoginFormDTO
  ) => {
    try {
      const { token } = await Api.auth.login(values)
      setCookie(null, '_token', token, {
        path:'/'
      })
      console.log('успешно')
      location.href='/dashboard'
    } catch (error) {
      console.warn('loginForm', error)
    }
    reset();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormDTO>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="test@test.ru"
      type="email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>Это поле обязательное!</span>}
      <input
        placeholder="*******"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Это поле обязательное!</span>}
      <button type="submit">Войти</button>
    </form>
  );
};
export const RegisterForm = () => {
  const onSubmit: SubmitHandler<RegisterFormDTO> = async (
    values: RegisterFormDTO
  ) => {
    try {
      const { token } = await Api.auth.register(values)
      setCookie(null, '_token', token, {
        path:'/'
      })
      console.log('успешно')
    } catch (error) {
      console.warn('loginForm', error)
    }
    reset();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormDTO>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="test@test.ru"
      type="email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>Это поле обязательное!</span>}
      <input
        placeholder="Имя"
      type="text"
        {...register("fullName", { required: true })}
      />
      {errors.email && <span>Это поле обязательное!</span>}
      <input
        placeholder="*******"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Это поле обязательное!</span>}
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
export const AuthPage = () => {
  const [auth, openAuth] = useState<boolean>(true)
  return (
    <div className="rounded-2xl bg-slate-300 w-2/5 mx-auto flex justify-center items-center flex-col mt-[15%] p-10 gap-4">
      {auth ? <LoginForm /> : <RegisterForm/>}
      уже есть в системе?
    {auth ?  <button onClick={() => openAuth(false)}>Зарегистрироваться</button> :  <button onClick={() => openAuth(true)}>Войти</button> } 
    </div>)
} 
import { Visit } from '../features/Visit/Types/types';
import { State, Res, User } from '../features/auth/Types/type';
import { Service } from "../features/service/Type/type";

export const registr = async (newUser: User): Promise<User> => {
  const res = await fetch("http://localhost:4000/api/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      password2: newUser.password2,
    }),
  });
  return await res.json();
};

export const login = async (item: User): Promise<User> => {
  const res = await fetch("http://localhost:4000/api/auth/sign-in", {
    method: "post",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify(item),
  });
  return await res.json();
};

export const checkUser = async (): Promise<Res> => {
  const res = await fetch("http://localhost:4000/api/auth/sign-in", {
    credentials: "include",
  });
  const data = await res.json();
  return await data;
};

export const logout = async (): Promise<User> => {
  const res = await fetch("http://localhost:4000/api/auth/logout", {
    credentials: "include",
  });
  return await res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("http://localhost:4000/api/main");
  return await res.json();
};

export const loadService = async (): Promise<Service[]> => {
  const res = await fetch("/api/service");
  return await res.json();
};

//забрать все приемы с бэка
export const loadVisits = async (): Promise<Visit[]> => {
  const res = await fetch('/api/appoint/visit');
  return res.json();
};

//забрать связующую таблицу с бэка
export const loadTables = async (): Promise<Visit[]> => {
  const res = await fetch('/api/appoint/table');
  return res.json();
};

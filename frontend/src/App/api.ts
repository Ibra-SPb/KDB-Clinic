import { Visit } from "../features/Visit/Types/types";
import { Service } from "../features/service/Type/type";
import { Doctor } from "../features/doctor/Type/type";
import { PayloadAuth, Res, User } from '../features/auth/Types/type';

export const registr = async (newUser: User): Promise<PayloadAuth> => {
  const res = await fetch("/api/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({
     name:newUser.name,
     email:newUser.email,
     phone:newUser.phone,
     password:newUser.password,
     password2:newUser.password2
    }),
  });
  return await res.json();
};

export const login = async (item: User): Promise<PayloadAuth> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      email: item.email,
      password: item.password,
    }),
  });

  return await res.json()
};

export const logout = async () => {
  const res = await fetch('/api/auth/logout', {
    method: 'DELETE'
  });
  if (!res.ok) {
    throw new Error('Oшибка')
  }
};

export const checkUser = async () => {
  const res = await fetch('/api/auth/session', {
    credentials: 'include',
  });
  const data = await res.json();
  return await data;
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("http://localhost:4000/api/main");
  return await res.json();
};
// забираем все сервисы с бэка
export const loadService = async (): Promise<Service[]> => {
  const res = await fetch("/api/service");
  return await res.json();
};
//забираем всех докторов с бэка
export const loadDoctors = async (): Promise<Doctor[]> => {
  const res = await fetch("/api/doctor");
  return await res.json();
};
//забрать все приемы с бэка
export const loadVisits = async (): Promise<Visit[]> => {
  const res = await fetch("/api/appoint/visit");
  return res.json();
};

//забрать связующую таблицу с бэка
export const loadTables = async (): Promise<Visit[]> => {
  const res = await fetch("/api/appoint/table");
  return res.json();
};


import { Visit } from '../features/Appointment/Types/types';
import { State, Res, User } from '../features/auth/Types/type';

export const registr = async (newUser: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     name:newUser.name,
     email:newUser.email,
     password:newUser.password,
     password2:newUser.password2
    }),
  });
  return res.json();
};

export const login = async (item: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};

export const checkUser = async (): Promise<Res> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    credentials: 'include',
  });
  const data = await res.json();
  return data;
};

export const logout = async (): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/logout', {
    credentials: 'include',
  });
  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('http://localhost:4000/api/main');
  return res.json();
};

//забрать все приемы с бэка
export const loadVisits = async (): Promise<Visit[]> => {
  const res = await fetch('/api/appoint', {
    credentials: 'include',
  });
  return res.json();
};
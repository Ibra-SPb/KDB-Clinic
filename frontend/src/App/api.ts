
import { Visit } from '../features/Appointment/Types/types';
import { PayloadAuth, Res, User } from '../features/auth/Types/type';

export const registr = async (newUser: User): Promise<PayloadAuth> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
  return data;
};

//забрать все приемы с бэка
export const loadVisits = async (): Promise<Visit[]> => {
  const res = await fetch('/api/appoint', {
  });
  return res.json();
};

export function getUsers() {
	throw new Error('Function not implemented.');
}

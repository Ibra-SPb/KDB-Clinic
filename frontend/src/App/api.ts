
import { State, Res, User } from '../features/auth/Types/type';


export const registr = async (newUser: User): Promise<User> => {
  
  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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

export const login = async (item: User): Promise<User> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return await res.json();
};

export const checkUser = async (): Promise<Res> => {
  const res = await fetch('/api/auth/sign-in', {
    credentials: 'include',
  });
  const data = await res.json();
  return await data;
};

export const logout = async (): Promise<User> => {
  const res = await fetch('/api/auth/logout', {
    credentials: 'include',
  });
  return await res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/main');
  return await res.json();
};
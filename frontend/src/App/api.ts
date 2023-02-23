import { Visit } from '../features/Visit/Types/types';
import { Service } from '../features/service/Type/type';
import {
  Doctor,
  PayloadDoctors,
  PayloadDoctorv,
} from '../features/doctor/Type/type';
import { PayloadAuth, User } from '../features/auth/Types/type';
import { Service_Doctor } from '../features/Appointment/Types/types';
import { Stock } from '../features/Stock/types/types';

export const registr = async (newUser: User): Promise<PayloadAuth> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      password: newUser.password,
      password2: newUser.password2,
    }),
  });
  return res.json();
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

  return res.json();
};

export const logout = async (): Promise<PayloadAuth> => {
  const res = await fetch('/api/auth/logout', {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error('Oшибка');
  }
  return res.json();
};

export const checkUser = async (): Promise<PayloadAuth> => {
  const res = await fetch('/api/auth/session', {
    credentials: 'include',
  });
  const data = await res.json();
  return data;
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/main');
  return res.json();
};
// забираем все сервисы с бэка
export const loadService = async (): Promise<Service[]> => {
  const res = await fetch('/api/service');
  return res.json();
};
// забираем всех докторов с бэка
export const loadDoctors = async (): Promise<PayloadDoctors> => {
  const res = await fetch('/api/doctor');
  return res.json();
};
// забрать все приемы с бэка
export const loadVisits = async (): Promise<Visit[]> => {
  const res = await fetch('/api/appoint/visit');
  return res.json();
};

// забрать связующую таблицу с бэка
export const loadTables = async (): Promise<Service_Doctor[]> => {
  const res = await fetch('/api/appoint/table');
  return res.json();
};

// забрать акции с бэка
export const loadStocks = async (): Promise<Stock[]> => {
  const res = await fetch('/api/stocks');
  return res.json();
};

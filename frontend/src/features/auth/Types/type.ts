export type Res = { message: string; user: string };

export type User = {
  id?: number;
  name?: string;
  email: string;
  password: string;
  password2?: string;
  phone?: string;
  files?: [{ path: string }];
};
export type State = {
  user: {} | User;
  users: User[];
  files: [] | Path[];
  error: undefined | string;
  isAuth: boolean;
};

export type Path = {
  path: string;
};

export type PayloadAuth = {
  user?: User;
  error?: string;
};

export type Message = {
  message: string;
};

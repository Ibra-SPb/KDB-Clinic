export type Res = { message: string; user: string };

export type User = {
    id?:number;
    name?:string;
    email:string;
    password:string;
    password2?:string;
    phone?:string;
  };
   export type State = {
    user:{} | User;
    error:undefined | string;
    isAuth: boolean;
   };
  
   export type PayloadAuth = {
    user?:User;
    error?:string;
   };
  
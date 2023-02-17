export type Res = { message: string; user: string };

export type User = {
    id?:number;
    name:string;
    email:string;
    password:string;
    password2?:string;
  };
   export type State = {
    user:{} | User;
    message:'' | string;
    users: User[];
   };
  
  
  
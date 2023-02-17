// import { type } from 'os';
import { Res, State, User } from './type';

type Action =
  | { type: 'INIT_USERS'; payload: User[] }
  | { type: 'REG_USER'; payload: State }
  | { type: 'LOG_USER'; payload: State }
  | { type: 'LOGOUT' }
  | { type: 'RES'; payload: Res }

export default Action;
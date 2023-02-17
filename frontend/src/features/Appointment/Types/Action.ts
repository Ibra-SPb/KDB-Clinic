import { Visit, State } from './types';

type Action =
  | {
      type: 'INIT_VISITS';
      payload: Visit[];
    }
    
export default Action;
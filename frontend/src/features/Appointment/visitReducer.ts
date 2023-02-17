import Action from './Types/Action';
import { State } from './Types/types';

export const init = { visits: [] };
// eslint-disable-next-line import/prefer-default-export
export const visitReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'INIT_VISITS':
      return {
        ...state,
        visits: action.payload,
      };
    default:
      return state;
  }
};
import Action from "./Type/Action";
import { State } from "./Type/type";

const init: State = {
  services: [],
};
const serviceReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case "INIT_SERVICE":
      return {
        ...state,
        services: action.payload,
      };
    default:
      return state;
  }
};
export default serviceReducer;
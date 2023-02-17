import { Service, State } from "./type";

type Action = {
  type: "INIT_SERVICE";
  payload: Service[];
};

export default Action;

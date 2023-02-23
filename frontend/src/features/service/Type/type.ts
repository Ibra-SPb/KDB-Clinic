export type Service = {
  id: number;
  title: string;
  body: string;
  img: string;
  price: string;
};
export type State = {
  services: Service[];
  userServices: Service[];
  error: undefined | string;
};

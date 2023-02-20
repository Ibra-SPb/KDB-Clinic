export type Doctor = {
  id: number;
  name: string;
  img: string;
  specific: string;
  info: string;
};
export type State = {
  doctors: Doctor[];
  error: undefined | string;
};

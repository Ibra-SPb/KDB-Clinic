export type Doctor = {
  id: number;
  name: string;
  img: string;
  specific: string;
  info: string;
  'Service_Doctors.serviceId'?:number;

};
export type State = {
  doctors: Doctor[];
  filterDoc: Doctor[];
  error: undefined | string;
};
export type PayloadDoctors = {
  doctors: Doctor[];
  doctorsAll: Doctor[];
};

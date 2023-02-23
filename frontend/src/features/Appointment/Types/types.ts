// eslint-disable-next-line @typescript-eslint/naming-convention
export type Service_Doctor = {
  id: number;
  doctorId: number;
  serviceId: number;
  service: {
    id?: number;
    title: string;
    price: string;
  };
  doctor: {
    id?: number;
    name: string;
    specific: string;
    img?: string;
    info: string;
  };
};

export type State = {
  serviceDoctors: Service_Doctor[];
  error: undefined | string;
};

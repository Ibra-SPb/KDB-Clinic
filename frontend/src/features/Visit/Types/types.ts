export type Visit = {
  id: number;
  userId: number;
  doctorId: number;
  serviceId: number;
  date: Date;
  time: string;
  status: boolean;
  doctor: {
    name: string;
    specific: string;
    info: string;
  };
  service: {
    title: string;
    price: string;
  };
};

export type State = {
  visits: Visit[];
  userVisits: Visit[];
  error: undefined | string;
};

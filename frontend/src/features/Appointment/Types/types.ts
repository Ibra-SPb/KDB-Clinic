export type Service_Doctor = {
  doctorId: number,
  serviceId: number,
  service: {
    title: string,
    price: string,
  },
  doctor: {
    name: string,
    specific: string,
    info: string,
  },
}

export type State = {
  service_doctors: Service_Doctor[],
  error: undefined | string,
}
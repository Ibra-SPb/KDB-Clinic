export type Visit = {
  userId: number,
  doctorId: number,
  serviceId: number,
  date: Date,
  time: string,
  status: boolean, 
}

export type State = {
  visits: Visit[]
}
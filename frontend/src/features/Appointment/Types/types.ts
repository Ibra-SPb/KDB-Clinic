export type Visit = {
  userId: number,
  doctorId: number,
  servisId: number,
  date: Date,
  time: string,
  status: boolean, 
}

export type State = {
  visits: Visit[]
}
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


const Appointment = (): JSX.Element => {
  const [page, setPage] = useState('service');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState([new Date()]);
  const [time, setTime] = useState([])

  const {services} = useSelector((store:RootState)=>store.serviceState)
  const {service_doctors} = useSelector((store:RootState)=>store.tableState)

  const chooseService = async (): Promise<void> => {
    const res = await fetch('/api/appoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service,
        doctor,
      }),
    })
    const data = await res.json();
    setPage('date')
    setDate(data.arrDate)
    setTime(data.time)
  }

  return (
    <>
    <div>
      <form onSubmit={chooseService}>
      {page === 'service' && (
        <div>
          <select onChange={(e) => setService(e.target.value)}>
            {services.map((service) => 
            <option>{service.title}</option>
            )}
          </select>
          <button onClick={() => setPage('doctor')}>выбрать</button>
        </div>
      )}
      {page === 'doctor' && (
        <div>
          <select onChange={(e) => setDoctor(e.target.value)}>
            {service_doctors.filter((sd)=> sd.service.title === service).map((sd) => 
            <option>{sd.doctor.name}</option>)}
          </select>
          <div>{doctor}</div>
          <button type='button' onClick={chooseService}>выбрать</button>
        </div>
      )}
      {page === 'date' && (
        <div>выбрать дату</div>
        {date.map()}
      )}

        
        <button type='submit'>записаться</button>
      </form>
    </div>
 
    </>
  )
}

export default Appointment
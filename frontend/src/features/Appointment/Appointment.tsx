import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


const Appointment = (): JSX.Element => {
  const [page, setPage] = useState('service');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');

  const {visits} = useSelector((store:RootState)=>store.visitState)
  const {service_doctors} = useSelector((store:RootState)=>store.tableState)
  // console.log(service_doctors)

  const chooseService = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api', {
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
    console.log(data)
  }

  return (
    <>
    <div>
      <form onSubmit={chooseService}>
      {page === 'service' && (
        <div>
          <select onChange={(e) => setService(e.target.value)}>
            {service_doctors.map((sd) => 
            <option>{sd.service.title}</option>
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
        </div>
      )}

        
        <button type='submit'>записаться</button>
      </form>
    </div>
 
    </>
  )
}

export default Appointment
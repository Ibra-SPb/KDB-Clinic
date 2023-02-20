import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './appoint.css'


const Appointment = (): JSX.Element => {
  const [page, setPage] = useState('service');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState([{date: new Date(), time: []}]);
  const [dateCh, setDateCh] = useState(new Date())
  const [timeCh, setTimeCh] = useState('');

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
    setDate(data.arrCheck)
  }

  const appointMake = async () => {
    const res = await fetch('/api/appoint/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service,
        doctor,
        date: dateCh,
        time: timeCh,
      }),
    })
    const data = await res.json();
  }

  return (
    <>
    <div>
      <form onSubmit={appointMake} className='addAppoint'>
      <div className = 'step'>
        <div className={page === 'service' ? 'active' : 'hidden'}>Выберите услугу</div>
        <div className={page === 'doctor' ? 'active' : 'hidden'}>Выберите доктора</div>
        <div className={page === 'date' ? 'active' : 'hidden'}>Выберите время</div>
      </div>

      {page === 'service' && (
        <div className='choose'>
          <select onChange={(e) => setService(e.target.value)}>
            {services.map((service) => 
            <option key={service.id}>{service.title}</option>
            )}
          </select>
          <button onClick={() => setPage('doctor')}>выбрать</button>
        </div>
      )}

      {page === 'doctor' && (
        <div className='choose'>
          <select onChange={(e) => setDoctor(e.target.value)}>
            {service_doctors.filter((sd)=> sd.service.title === service).map((sd) => 
            <option key={sd.id}>{sd.doctor.name}</option>)}
          </select>
          <button type='button' onClick={chooseService}>выбрать</button>
        </div>
      )}

      {page === 'date' && (
          <div className='choose'>
            <div className='dateTime'>
              {date.map((dt) =>
                <>
                  <div key={dt.date.toLocaleString()} className='dateCh' onClick={() => setDateCh(dt.date)}>{dt.date.toLocaleString().slice(0, 10)}</div>
                    <div className='timeCh'>
                    {dt.time.map((tm) =>
                    <div onClick={() => setTimeCh(tm)}>{tm}</div>
                    )}
                    </div>
                    </>
              )}
            </div>
            <button type='submit'>записаться</button>
          </div>
      )}
      </form>
    </div>
 
    </>
  )
}

export default Appointment
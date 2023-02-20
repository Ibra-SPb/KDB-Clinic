import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { Doctor } from '../doctor/Type/type';
import { Service } from '../service/Type/type';
import './appoint.css'
import { Service_Doctor } from './Types/types';


const Appointment = (): JSX.Element => {
  const [page, setPage] = useState('service');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState([{date: new Date(), time: []}]);
  const [dateCh, setDateCh] = useState(new Date())
  const [timeCh, setTimeCh] = useState('');
  const [status, setStatus] = useState('')
  const navigate = useNavigate();

  const {services} = useSelector((store:RootState)=>store.serviceState)
  const {service_doctors} = useSelector((store:RootState)=>store.tableState)
  const {doctors} = useSelector((store:RootState)=>store.doctorState)

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
    data.arrDate.forEach((dt: any) => {
      dt.date =new Date(dt.date)
    })
    setDate(data.arrDate)
    setPage('date')
  }

  const appointMake = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
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
    if(data.status) {
    setStatus('ready')
  }
  }

  const chooseDateTime = (date: Date, time: string) => {
    setDateCh(date)
    setTimeCh(time);
  }

  return (
    <>
    <div className='appointContainer'>
      <form onSubmit={appointMake} className='addAppoint'>
      <div className = 'step'>
        <div className={page === 'service' ? 'active' : 'hidden'}>Выберите услугу</div>
        <div className={page === 'doctor' ? 'active' : 'hidden'}>Выберите доктора</div>
        <div className={page === 'date' ? 'active' : 'hidden'}>Выберите время</div>
      </div>

      {page === 'service' && (
        <div className='choose'>
          <select onChange={(e) => setService(e.target.value)} >
            {services.map((service: Service) => 
            <option key={service.id}>{service.title}</option>
            )}
          </select>
        <div className='confirmButtons'>
          <button onClick={() => setPage('doctor')}>выбрать</button>
          <button onClick={() => navigate(-1)}>назад</button>
        </div>
        </div>
      )}

      {page === 'doctor' && (
        <div className='choose'>
          <select onChange={(e) => setDoctor(e.target.value)}>
            {service_doctors.filter((sd: Service_Doctor)=> sd.service.title === service).map((sd: Service_Doctor) => 
            <option key={sd.id}>{sd.doctor.name}</option>)}
          </select>
            <div>
              {doctors.filter((doc: Doctor) => doc.name === doctor).map((doc: Doctor) => 
              <div className='doctorCard'>
                <img src={doc.img}></img>
                <div>
                  <p>Врач: {doc.name}</p>
                  <p>Специализация: {doc.specific}</p>
                </div>
              </div>
              )}
            </div>
          <div className='confirmButtons'>
            <button type='button' onClick={chooseService}>выбрать</button>
            <button onClick={() => setPage('service')}>назад</button>
          </div>
        </div>
      )}

      {page === 'date' && (
          <div className='choose'>
            <div className='dateTime'>
              {date.map((dt) =>
                  <>
                    <div className='dateTimeOne'>
                        <div className={dateCh === dt.date ? 'dateChoose' : 'dateCh'} key={dt.date.toLocaleString()}>{dt.date.toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long'})}</div>
                      <div className='timeCh'>
                        {dt.time.map((tm) =>
                          <div className={dateCh === dt.date && timeCh === tm ? 'timeChoose' : 'timeNone'} onClick={() => chooseDateTime(dt.date, tm)}>{tm}</div>
                        )}
                    </div>
                    </div>
                  </>
              )}
            </div>
            <div className='confirmButtons'>
              <button type='button' onClick={() => setStatus('confirm')}>записаться</button>
              <button onClick={() => setPage('doctor')}>назад</button>
            </div>

            {status === 'confirm' && 
            (<div className='confirmAppointBack'>
              <div className='confirmAppoint'>
                <h1>Подтвердите запись:</h1><br></br>
                <p>Услуга: {service}</p>
                <p>Врач: {doctor}</p>
                <div className='dateTime'>
                  Дата и время:
                  <br></br>
                  <p> {dateCh.toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long'})}</p>
                  <p> {timeCh}</p>
                </div>
                <div className='confirmButtons'>
                  <button type='submit'>записаться</button>
                  <button onClick={() => setStatus('')}>назад</button>
                </div>
              </div>
            </div>)}

            {status === 'ready' && (
            <div className='confirmAppointBack'>
              <div className='confirmAppoint'>
                <h1>Вы записаны:</h1><br></br>
                <p>Услуга: {service}</p>
                <p>Врач: {doctor}</p>
                <div className='dateTime'>
                  Дата и время:
                  <br></br>
                  <p> {dateCh.toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long'})}</p>
                  <p> {timeCh}</p>
                </div>
                <button onClick={() => navigate('/')}>вернуться на главную</button>
            </div>
            </div>
            )}
          </div>
      )}
      </form>
    </div>
    </>
  )
}

export default Appointment
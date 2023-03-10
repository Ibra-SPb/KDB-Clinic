/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { Doctor } from '../doctor/Type/type';
import { Service } from '../service/Type/type';
import './appoint.css';
import { Service_Doctor, VisitNew } from './Types/types';
import './AppointmetStyle.scss';

function Appointment(): JSX.Element {
  const [page, setPage] = useState('service');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState([[{ date: new Date(), time: [''] }]]);
  const [dateCh, setDateCh] = useState(new Date());
  const [timeCh, setTimeCh] = useState('');
  const [status, setStatus] = useState('');
  const [pageWeek, setPageWeek] = useState(0);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { services } = useSelector((store: RootState) => store.serviceState);
  const { serviceDoctors } = useSelector(
    (store: RootState) => store.tableState
  );
  const { filterDoc } = useSelector((store: RootState) => store.doctorState);

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
    });
    const data = await res.json();

    data.arrDate.forEach((dt: any) => {
      dt.date = new Date(dt.date);
    });

    const arrWeek = [];

    for (let i = 0; i < data.arrDate.length; i += 7) {
      arrWeek.push(data.arrDate.slice(i, i + 7));
    }

    setDate(arrWeek);
    setPage('date');
  };

  const appointMake = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoad(true);
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
    });
    const data = await res.json();
    if (data.status) {
      setStatus('ready');
    }
  };

  // const handleAppointMake = (): void => {
  //   const visit: VisitNew = {
  //     service,
  //     doctor,
  //     date: dateCh,
  //     time: timeCh,
  //   };
  //   dispatch(visit);
  //   console.log(visit);
  // };

  const chooseDateTime = (day: Date, time: string): void => {
    setDateCh(day);
    setTimeCh(time);
  };

  return (
    <div>
      <div className="appointContainer">
        <form onSubmit={appointMake} className="addAppoint">
          <div className="step">
            <div className={page === 'service' ? 'active' : 'hidden'}>
              ???????????????? ????????????
            </div>
            <div className={page === 'doctor' ? 'active' : 'hidden'}>
              ???????????????? ??????????????
            </div>
            <div className={page === 'date' ? 'active' : 'hidden'}>
              ???????????????? ??????????
            </div>
          </div>

          {page === 'service' && (
            <div className="choose">
              <select onChange={(e) => setService(e.target.value)}>
                <option>???????????????? ????????????</option>
                {services?.map((oneService: Service) => (
                  <option key={oneService.id} value={oneService.title}>
                    {oneService.title}
                  </option>
                ))}
              </select>
              <div className="confirmButtons">
                {service.length > 0 && service !== '???????????????? ????????????' && (
                  <button type="button" onClick={() => setPage('doctor')}>
                    ??????????????
                  </button>
                )}
                <button type="button" onClick={() => navigate(-1)}>
                  ??????????
                </button>
              </div>
            </div>
          )}
          {page === 'doctor' && (
            <div className="choose">
              <select onChange={(e) => setDoctor(e.target.value)}>
                <option>???????????????? ??????????</option>
                {serviceDoctors
                  .filter((sd: Service_Doctor) => sd.service.title === service)
                  .map((sd: Service_Doctor) => (
                    <option key={sd.id}>{sd.doctor.name}</option>
                  ))}
              </select>
              <div>
                {filterDoc
                  .filter((doc: Doctor) => doc.name === doctor)
                  .map((doc: Doctor) => (
                    <div className="doctorCard">
                      <img src={doc.img} alt="doctor_image" />
                      <div>
                        <p>????????: {doc.name}</p>
                        <p>??????????????????????????: {doc.specific}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="confirmButtons">
                {doctor.length > 0 && doctor !== '???????????????? ??????????' && (
                  <button type="button" onClick={chooseService}>
                    ??????????????
                  </button>
                )}
                <button type="button" onClick={() => setPage('service')}>
                  ??????????
                </button>
              </div>
            </div>
          )}

          {page === 'date' && (
            <div className="pagination">
              <div
                className="handle"
                onClick={() =>
                  pageWeek > 0
                    ? setPageWeek((prev) => prev - 1)
                    : setPageWeek(3)
                }
              >
                {'<'}
              </div>
              <div className="choose">
                {date.map((week, i) => (
                  <div>
                    {pageWeek === i && (
                      <div className="dateTime">
                        {week.map((dt) => (
                          <div className="dateTimeOne">
                            <div
                              className={
                                dateCh === dt.date ? 'dateChoose' : dt.date.toLocaleString('ru', { weekday: 'long' }).includes('??????????????') || dt.date.toLocaleString('ru', { weekday: 'long' }).includes('??????????????????????') ? 'output' : 'dateCh'
                              }
                              key={dt.date.toLocaleString()}
                            >
                              {dt.date.toLocaleString('ru', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                                weekday: 'long',
                              })}
                            </div>
                            <div className="timeCh">
                              {dt.time.map((tm) => (
                                <div>
                                {!(dt.date.toLocaleString('ru', { weekday: 'long' }).includes('??????????????') || dt.date.toLocaleString('ru', { weekday: 'long' }).includes('??????????????????????')) &&
                                (
                                  <div
                                    className={
                                    dateCh === dt.date && timeCh === tm
                                      ? 'timeChoose'
                                      : 'timeNone'
                                  }
                                    onClick={() => chooseDateTime(dt.date, tm)}
                                  >
                                  {tm}
                                  </div>
                                )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="confirmButtons">
                  {timeCh.length > 0 && (
                    <button type="button" onClick={() => setStatus('confirm')}>
                      ????????????????????
                    </button>
                  )}
                  <button type="button" onClick={() => setPage('doctor')}>
                    ??????????
                  </button>
                </div>

                {status === 'confirm' && (
                  <div className="confirmAppointBack">
                    <div className="confirmAppoint">
                      <h1>?????????????????????? ????????????:</h1>
                      <br />
                      <p>????????????: {service}</p>
                      <p>????????: {doctor}</p>
                      <div className="dateTime">
                        ???????? ?? ??????????:
                        <br />
                        <p>
                          {' '}
                          {dateCh.toLocaleString('ru', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            weekday: 'long',
                          })}
                        </p>
                        <p> {timeCh}</p>
                      </div>
                      {load &&
                        (<div className="loader" />)}
                      <div className="confirmButtons">
                        <button type="submit">????????????????????</button>
                        <button type="button" onClick={() => setStatus('')}>
                          ??????????
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {status === 'ready' && (
                  <div className="confirmAppointBack">
                    <div className="confirmAppoint">
                      <h1>???? ????????????????:</h1>
                      <br />
                      <p>????????????: {service}</p>
                      <p>????????: {doctor}</p>
                      <div className="dateTime">
                        ???????? ?? ??????????:
                        <br />
                        <p>
                          {' '}
                          {dateCh.toLocaleString('ru', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            weekday: 'long',
                          })}
                        </p>
                        <p> {timeCh}</p>
                      </div>
                      <button
                        className="main_page_btn"
                        type="button"
                        onClick={() => navigate('/')}
                      >
                        ???? ??????????????
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="handle"
                onClick={() =>
                  pageWeek < 3
                    ? setPageWeek((prev) => prev + 1)
                    : setPageWeek(0)
                }
              >
                {'>'}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Appointment;

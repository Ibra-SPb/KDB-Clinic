import React, { useState } from 'react'

const Appointment = (): JSX.Element => {
  const [page, setPage] = useState('service');
  const [service, setService] = useState('');

  const chooseService = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/appoint/service', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service,
      }),
    })
    const data = await res.json();
    console.log(data)
  }

  return (
    <>
    {page === 'service' && (
    <div>
      <form onSubmit={chooseService}>
        <select onChange={(e) => setService(e.target.value)}>
          <option>Неврология</option>
          <option>Акупунктура</option>
          <option>Лечебный массаж</option>
          <option>Физиотерапия</option>
          <option>Косметология</option>
        </select>
        <button type='submit'>выбрать</button>
      </form>
    </div>
    )}
    </>
  )
}

export default Appointment
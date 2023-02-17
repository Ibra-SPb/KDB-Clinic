import React, { useState } from 'react';


function Authorization(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={() => console.log('reg')}
      >
        <label htmlFor="type">Email</label>
        <input
          id="type"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Авторизироваться</button>
      </form>
    </div>
  );
}

export default Authorization;

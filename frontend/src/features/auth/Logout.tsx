import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Logout(): JSX.Element {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const log = async (): Promise<void> => {
    const out = await fetch('http://localhost:4000/api/auth/logout', {
      credentials: 'include',
    }).then((data) => dispatch({ type: 'LOGOUT', payload: data }));
    navigate('/');
  };

  useEffect(() => {
    log();
  }, []);

  return <div>Logout</div>;
}

export default Logout;

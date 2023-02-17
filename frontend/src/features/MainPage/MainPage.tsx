import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function MainPage(): JSX.Element {
  const { users, user } = useSelector((store: RootState) => store.userState);
  const nav = useNavigate();
  return (
<h4>Хочешь быть в числе сильнейших - зарегистрируйся!</h4>
  );
}
export default MainPage;


import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


import {logoutUser} from '../auth/authSlice'
import { useAppDispatch } from '../../store';



function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);

  const dispatch = useAppDispatch();


  
  const  handlelogout= ():void=> {
    dispatch(logoutUser());
    };

  return (
    <>
      <div className="nav__container">
        <ul className="nav__list">
          {('email' in user) ? (
            <>
            <li>
            </li>
            <li>Hi</li>
            </>
          ) : (
            <>
            <li>
              <NavLink className="nav__list-item" to="/enterPage">
               <button>Личный кабинет</button>
              </NavLink>
            </li>
          </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;

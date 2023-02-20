import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function RegistrationPage() {
  return (
    <>
    <div className="nav__container">
      <ul className="nav__list">    
          <>
            <li>
              <NavLink className="nav__list-item" to="/login">
              <div>Если зарегестрирован - авторизуйся</div>
              <button>Авторизация</button>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__list-item" to="/registration">
               <button>Зарегестрируйся</button>
              </NavLink>
            </li>
          </>
      </ul>
    </div>
    <Outlet />
  </>
  )
}

export default RegistrationPage
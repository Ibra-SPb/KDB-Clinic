import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { logoutUser } from '../auth/authSlice';
import { useAppDispatch } from '../../store';
import './NavBarStyles.scss';

function Navbar(): JSX.Element {
	const { user } = useSelector((store: RootState) => store.userState);

	const dispatch = useAppDispatch();

	const handlelogout = (): void => {
		dispatch(logoutUser());
	};

	return (
		<>
			<div className='nav__container'>
				<div className='nav__list'>
					{'email' in user ? (
						<>
							<div>KDN clinic</div>
						</>
					) : (
						<>
							<div className='KDN_title'>
								<NavLink to={'/'}>
									<div>KDN clinic</div>
								</NavLink>
							</div>
							<div className='menu_buttons'>
								<div className='KDN_title'>
									<NavLink to={'/services'}>
										<button>Услуги</button>
									</NavLink>
								</div>
								<div className='KDN_title'>
									<NavLink to={'/doctors'}>
										<button type='button'>Врачи</button>
									</NavLink>
								</div>
								<div className='KDN_title'>Контакты</div>
							</div>

							<div className='lk_style'>
								<NavLink
									className='nav__list-item'
									to={'/enterPage'}>
									<button type='button'>Личный кабинет</button>
								</NavLink>
							</div>
						</>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Navbar;

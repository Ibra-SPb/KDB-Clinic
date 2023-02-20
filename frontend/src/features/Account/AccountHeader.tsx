import React from 'react';
import './Account.scss';

export default function AccountHeader(): JSX.Element {
  // const {user} = useSelector((store: RootState) => store.userState)

  return (
    <div className="account__header">
      <div>
        <a href="/">
          <img src="" alt="logo" />
        </a>
      </div>
      <div className="account__nickname">
        <img className='account__image' src="../../../IMG/account_icon.png" alt="account_icon"/>
        <div>{/* {user.name} */}</div>
        <button type="button" className='account__appointment'>Записаться на приём</button>
      </div>
    </div>
  );
}

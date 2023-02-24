import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { User } from '../auth/Types/type';
import { addFiles } from './fileSlice';

function AccountUpload(): JSX.Element {
  const dispatch = useAppDispatch();
  const { users } = useSelector((store: RootState) => store.userState);

  const handleChange = (event: any): void => {
    event.preventDefault();
    const docs = [...event.target.body.files];
    const newFile = new FormData();
    docs.forEach((doc) => {
      newFile.append('saveDoc', doc);
    });
    dispatch(
      addFiles({
        newFile,
        id: Number(event.target.clientName.value),
      })
    );
  };

  return (
    <div className="upload">
      <form onSubmit={handleChange}>
        <select name="clientName">
          <option>Выберите пациента</option>
          {users.map((user: User) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <input type="file" name="body" />
        <button className="account__page upload" type="submit">
          Загрузить
        </button>
      </form>
    </div>
  );
}

export default AccountUpload;

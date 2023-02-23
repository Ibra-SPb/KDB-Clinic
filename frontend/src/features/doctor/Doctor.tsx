/* eslint-disable no-return-assign */
import React from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import OneDoctor from './OneDoctor';
import './Doctorstyle.scss';
import usePagination from '../../hooks/usePagination';
import { filterDoctors, loadDoctor } from './doctorSlice';

function Doctor(): JSX.Element {
  const dispatch = useAppDispatch();
  const { filterDoc } = useSelector((store: RootState) => store.doctorState);
  const { services } = useSelector((store: RootState) => store.serviceState);

  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } =
    usePagination({
      contentPerPage: 4,
      count: filterDoc.length,
    });

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const filterDoctor = (): void => {
    dispatch(loadDoctor());
  };

  return (
    <>
      <p>Выберите направление:</p>
      <select
        // defaultValue=""
        className="selectSpecific"
        onChange={(e) => dispatch(filterDoctors(e.target.value))}
      >
        {services?.map((el) => (
          <option value={el.id}>{el.title}</option>
        ))}
      </select>
      <div className="allDoctor__container container">
        {filterDoc.slice(firstContentIndex, lastContentIndex).map((el) => (
          <OneDoctor key={el.id} oneDoctor={el} />
        ))}
      </div>
      <div className="pagination">
        {/* @ts-ignore */}
        {[...Array(totalPages).keys()].map((el) => (
          <button
            type="button"
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${page === el + 1 ? 'actives' : ''}`}
          >
            {el + 1}
          </button>
        ))}
      </div>
      <div>
        <button className="alldoc" type="button" onClick={filterDoctor}>
          Все доктора
        </button>
      </div>
    </>
  );
}

export default Doctor;

import React from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import './Account.scss';

export default function AccountResults(): JSX.Element {
  // const nav = useNavigate();

  const { results } = useSelector((store: RootState) => store.resultState);

  return (
    <div className="results__container">
      <h3>Результаты обследований и анализов</h3>
      <div className="results__body">
        {results.map((result) => (
          <div>
            <img src="../../../IMG/file_icon.png" alt="file_image" />
            <span className="results__fileName">{result.path}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

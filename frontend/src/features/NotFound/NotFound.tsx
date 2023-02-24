import React from 'react';
import photo from './404.png';

function PageNotFound(): JSX.Element {
  return (
    <img className="photo" src={photo} alt="" />
  );
}

export default PageNotFound;

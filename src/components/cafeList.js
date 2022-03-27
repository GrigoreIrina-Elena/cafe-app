import React, { useContext } from 'react';
import _ from 'lodash';
import Cafe from './cafe';
import CafesContext from '../context/CafesContext';

const CafeList = () => {
  const {cafes, setCafes} = useContext(CafesContext);

  const handleRemoveBook = (id) => {
    setCafes(cafes.filter((cafe) => cafe.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(cafes) ? (
          cafes.map((cafe) => (
            <Cafe key={cafe.id} {...cafe} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">Nu exista niciun produs. Va rugam sa adaugati unul.</p>
        )}
      </div>
    </React.Fragment>
  );
};


export default CafeList;
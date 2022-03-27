import React, { useContext } from 'react';
import CafeForm from './CafeForm';
import { useParams } from 'react-router-dom';
import CafesContext from '../context/CafesContext';

const EditCafe = ({ history}) => {
  const {cafes, setCafes} = useContext(CafesContext);
  const { id } = useParams();
  const cafeToEdit = cafes.find((cafe) => cafe.id === id);

  const handleOnSubmit = (cafe) => {
    const filteredCafes = cafes.filter((cafe) => cafe.id !== id);
    setCafes([cafe, ...filteredCafes]);
    history.push('/');
  };

  return (
    <div>
      <CafeForm cafe={cafeToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCafe;
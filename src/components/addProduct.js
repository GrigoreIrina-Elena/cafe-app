import React, { useContext } from "react";
import CafeForm from "./CafeForm";
import CafesContext from "../context/CafesContext";

const AddProduct = ({ history}) => {
  const {cafes, setCafes} = useContext(CafesContext);

  const handleOnSubmit = (cafe) => {
    setCafes([cafe, ...cafes]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <CafeForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddProduct;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid'

const CafeForm = (props) => {
    const [cafe, setCafe] = useState({
      nume: props.cafe ? props.cafe.nume : '',
      pret: props.cafe ? props.cafe.pret : '',
      cantitate: props.cafe ? props.cafe.cantitate : '',
      descriere: props.cafe ? props.cafe.descriere : '',
      comentarii: props.cafe ? props.cafe.comentarii : '',
      rating: props.cafe ? props.cafe.rating : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const {nume, pret, cantitate, descriere, comentarii, rating} = cafe;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [nume, pret];
        let errorMsg = '';

        const NamePriceFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
          });

          if (NamePriceFilled) {
            const cafe = {
              id: uuidv4(),
              nume,
              pret,
              cantitate,
              descriere,
              comentarii,
              rating
            };
            props.handleOnSubmit(cafe);
          } else {
              errorMsg = "Completati numele si pretul.";
          }
          setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCafe((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="main-form">
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nume</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="nume"
                value={nume}
                placeholder="Introduce numele produsului"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="pret">
             <Form.Label>Pret</Form.Label>
             <Form.Control
              className="input-control"
              vtype="text"
              name="pret"
              value={pret}
              placeholder="Introduceti pretul produsului"
              onChange={handleInputChange}
             />
            </Form.Group>
            <Form.Group controlId="cantitate">
             <Form.Label>Cantitate</Form.Label>
             <Form.Control
              className="input-control"
              vtype="number"
              name="cantitate"
              value={cantitate}
              placeholder="Introduceti cantitatea produsului"
              onChange={handleInputChange}
             />
            </Form.Group>
            <Form.Group controlId="descriere">
             <Form.Label>Descriere</Form.Label>
             <Form.Control
              className="input-control"
              vtype="text"
              name="descriere"
              value={descriere}
              placeholder="Introduceti descrierea produsului"
              onChange={handleInputChange}
             />
            </Form.Group>
            <Form.Group controlId="comentarii">
             <Form.Label>Comentarii</Form.Label>
             <Form.Control
              className="input-control"
              vtype="text"
              name="comentarii"
              value={comentarii}
              placeholder="Comentarii"
              onChange={handleInputChange}
             />
            </Form.Group>
            <Form.Group controlId="rating">
             <Form.Label>Rating</Form.Label>
             <Form.Control
              className="input-control"
              vtype="number"
              name="rating"
              value={rating}
              placeholder="Introduceti un numar de la 1 la 10"
              onChange={handleInputChange}
             />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
                Submit
            </Button>
        </Form>
    </div>
    );
}

export default CafeForm;
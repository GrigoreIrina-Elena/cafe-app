import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Cafe = ({
  id,
  nume,
  pret,
  cantitate,
  descriere,
  comentarii,
  rating,
  handleRemoveCafe,
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: "18rem" }} className="cafe">
      <Card.Body>
        <Card.Title className="cafe-title">{SVGAnimatedNumberList}</Card.Title>
        <div className="cafe-details">
          <div>Nume: {nume}</div>
          <div>Pret: {pret} </div>
          <div>Cantitate: {cantitate} </div>
          <div>Descriere: {descriere} </div>
          <div>Comentarii: {comentarii}</div>
          <div>Rating: {rating} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveCafe(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cafe;

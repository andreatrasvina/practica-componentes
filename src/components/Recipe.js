import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from '../assets/imagen.png';

const Recipe = ({ title, description }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>{title}</Card.Title>
        <Card.Text style={{ fontSize: '16px', color: 'black' }}>{description}</Card.Text>
        <Button variant="primary" className="btn-primary">Ver</Button>
      </Card.Body>
    </Card>
  );
}

export default Recipe;

import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import './styles.css';
import image from '../../assets/images/img01.PNG'

const Caixa = ({ title, body }) => (
  <Card className="mb-4">
    <Card.Header bg="light" color="light">
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Body className="body">
      <Button variant="dark" bg="dark" size="lg" active className="button" href="#">
        ADD INFO
      </Button>
      {body}
      <Card.Img as={Image} src={image} fluid={true} alt="Card image" />
    </Card.Body>
    
  </Card>
);

export default Caixa;

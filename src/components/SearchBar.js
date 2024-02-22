import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Nombre de la receta" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  );
}

export default SearchBar;

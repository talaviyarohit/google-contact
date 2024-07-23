import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form inline className="my-3">
      <FormControl type="text" placeholder="Search Contacts" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;

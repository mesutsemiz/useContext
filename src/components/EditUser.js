import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { Link } from 'react-router-dom';
export const EditUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="EnterName"
          style={{ width: '80%' }}
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger m-2">
        Cancel
      </Link>
    </Form>
  );
};

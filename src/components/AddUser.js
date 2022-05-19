import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { Link } from 'react-router-dom';

export const AddUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="">Name</Label>
        <Input
          type="text"
          placeholder="EnterName"
          style={{ width: '80%' }}
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger m-2">
        Cancel
      </Link>
    </Form>
  );
};

import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import { ErrorMessage, Field } from "formik";
import Error from "./Error";

const Login_Utils = ({ task }) => {
  return <>
    <FormGroup className="mb-3">
      <Label className="card-title mx-2" for="exampleEmail">Email:</Label>
      <Field
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="input_box"
      />
    </FormGroup>
    <ErrorMessage name="email" component={Error} />
    <FormGroup className="mb-3">
      <Label className="card-title mx-2" for="examplePassword">Password:</Label>
      <Field
        type="password"
        name="password"
        placeholder="Enter Your Password"
        className="input_box"
      />
    </FormGroup>
    <ErrorMessage name="password" component={Error} />
    <div className="btn">
      <Button color="primary" data-test="submit" type="submit">
        {task}
      </Button>
    </div>
  </>
}

export default Login_Utils;
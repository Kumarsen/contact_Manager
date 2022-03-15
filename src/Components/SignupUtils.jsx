import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import { ErrorMessage, Field } from "formik";
import Error from "./Error";


const SignupUtils = () => {
    return <>
        <FormGroup className="mb-3">
            <Label className="card-title mx-2" for="exampleUname">Name:</Label>
            <Field
                type="text"
                name="uname"
                placeholder="Cris Hemsworth"

            />
        </FormGroup>
        <ErrorMessage name="uname" component={Error} />
        <FormGroup className="mb-3">
            <Label className="card-title mx-2" for="exampleEmail">Email:</Label>
            <Field
                type="email"
                name="email"
                placeholder="cris@yahoo.com"

            />
        </FormGroup>
        <ErrorMessage name="email" component={Error} />
        <FormGroup className="mb-3" >
            <Label className="card-title mx-2" for="examplePassword">Password:</Label>
            <Field
                type="password"
                name="password"
                placeholder="Enter Your Password"

            />
        </FormGroup>
        <ErrorMessage name="password" component={Error} />
        <FormGroup>
            <Label className="card-title mx-2" for="examplecPassword">Confirm Password:</Label>
            <Field
                type="password"
                name="cpassword"
                placeholder="Confirm Your Password"

            />
        </FormGroup>
        <ErrorMessage name="cpassword" component={Error} />
        <div className="btn">
            <Button color="primary" data-test="submit" type="submit">
                Signup
            </Button>
        </div>
    </>
}
export default SignupUtils;
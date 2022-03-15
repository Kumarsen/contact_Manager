import React from "react";
import SignupUtils from "../Components/SignupUtils";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";

const Signup = ({ signupController }) => {
    const navigate = useNavigate();
    const initialValues = {
        uname: "",
        email: "",
        password: ""
    }
    const validationSchema = Yup.object().shape({
        uname: Yup.string()
            .max(18, "must be 18 characters or less")
            .min(5, "atleast 5 characters")
            .required("required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
            .max(6, "Must be 6 characters or less")
            .min(4, "At least 4 characters long")
            .required("Required"),
        cpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    const onSubmit = (values) => {
        console.log(values);
        console.log(signupController(values));
        alert("Account created, Please Signin");
        navigate("/");
    }
    return <>
        <Nav />
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="card text-center mt-5" style={{ width: "30rem" }}>
                <div className="card-header" style={{ fontWeight: "bolder" }}>Create Your Account Here</div>
                <div className="card-body">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form className="pt-3">
                            <SignupUtils />
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </>
}
export default Signup;
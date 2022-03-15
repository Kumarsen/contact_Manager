import React from "react";
import LoginUtils from "../Components/Login_Utils";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";


const Login = ({ users }) => {
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: ""
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
            .max(6, "Must be 6 characters or less")
            .min(4, "At least 4 characters long")
            .required("Required"),
    });

    const onSubmit = (values) => {
        const loggedUser = users.find((user) => {
            return user.email === values.email && user.password === values.password;
        })
        if (loggedUser) {
            localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
            const lid = loggedUser.id;
            console.log(lid);
            navigate(`/dashboard/${lid}`);
        } else {
            alert("invalid inputs please try again");
            window.location.reload();
        }
    }

    return <>
        <Nav />
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="card text-center mt-5" style={{ width: "30rem" }}>
                <div className="card-header" style={{ fontWeight: "bolder" }}>User Login</div>
                <div className="card-body">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form className="pt-3">
                            <LoginUtils task="Login" />
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </>

}

export default Login;
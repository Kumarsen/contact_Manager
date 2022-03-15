import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Label } from "reactstrap";
import { ErrorMessage, Field } from "formik";
import Error from "../Components/Error";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Api from "../api/contact_mngr";
import InnerNav from "../Components/InnerNav";

const Addcontact = () => {
    const { lid } = useParams();
    console.log(lid + "from add contact");
    const navigate = useNavigate();

    const initialValues = {

        contactName: "",
        email: "",
        phone: ""
    }

    const validationSchema = Yup.object().shape({
        contactName: Yup.string()
            .max(18, "must be 18 characters or less")
            .min(5, "atleast 5 characters")
            .required("required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string()
            .max(10, "must be 10 digit")
            .min(10, "must be 10 digit")
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Phone number is not valid"
            )
            .required("required")
    });
    const addCtapi = async (req) => {
        const resp = await Api.post("/contacts", req);
        return resp;
    }
    const onSubmit = (values) => {
        const cdetails = values;
        cdetails.userId = parseInt(lid);
        console.log(cdetails);
        const resp = addCtapi(cdetails);
        console.log(resp);
        alert("Contact Created");
        navigate(`/dashboard/${lid}`);
    }

    return <>
        <InnerNav />
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="card text-center mt-5" style={{ width: "30rem" }}>
                <div className="card-header" style={{ fontWeight: "bolder" }}>New Contact</div>
                <div className="card-body">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <FormGroup>
                                <Label className="card-title mx-2" for="exampleCname">Name:</Label>
                                <Field
                                    type="text"
                                    name="contactName"
                                    placeholder="Contact name"
                                    className="input_box"
                                />
                            </FormGroup>
                            <ErrorMessage name="contactName" component={Error} />
                            <FormGroup>
                                <Label className="card-title mx-2" for="exampleEmail">Email:</Label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input_box"
                                />
                            </FormGroup>
                            <ErrorMessage name="email" component={Error} />
                            <FormGroup>
                                <Label className="card-title mx-2" for="examplePhone">Contact Number:</Label>
                                <Field
                                    type="number"
                                    name="phone"
                                    placeholder="Number must be 10 digit"
                                    className="input_box"
                                />
                            </FormGroup>
                            <ErrorMessage name="phone" component={Error} />
                            <div className="btn">
                                <Button color="primary" data-test="submit" type="submit">
                                    Add Contact
                                </Button>
                                <Link to={`/dashboard/${lid}`} className="btn btn-primary mx-2" >Goback</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </>

}

export default Addcontact;
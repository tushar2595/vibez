import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { userActions } from '../../redux/action/auth.action';
const Login = (props) => {
    const initialValues = {
        email: "",
        password: ""
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };
    //form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
        props.login(formValues);
    };
    //form validation handler
    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "Cannot be blank";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Cannot be blank";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }

        return errors;
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder={"email"} name={"email"} onChange={handleChange} />
                {formErrors.email}
                <input placeholder={"password"} name={"password"} onChange={handleChange} />
                {formErrors.email}
                <button type={"submit"}>Login</button>
            </form>
        </div>
    )

}
function mapState(state) {
    // const { loggingIn } = state.authentication;
    // return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
};

export default connect(mapState, actionCreators)(Login);


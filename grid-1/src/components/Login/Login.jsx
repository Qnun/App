import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"login"} validate={[required, maxLength10]} placeholder={"Login"} />
            </div>
            <div>
                <Field component={Input} name={"password"} validate={[required, maxLength10]} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        )
};

const LoginReduxForm = reduxForm ({form:'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{

    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) =>{
    return{

    }
}

export default compose(connect(mapStateToProps))(Login)

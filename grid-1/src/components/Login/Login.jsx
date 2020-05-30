import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"Login"} />
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Remember me
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

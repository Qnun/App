import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} validate={[required, maxLength30]} placeholder={"Email"}/>
            </div>
            <div>
                <Field component={Input} name={"password"} validate={[required, maxLength30]} placeholder={"Password"}
                       type={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            {props.error &&
            <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {login}))(Login)

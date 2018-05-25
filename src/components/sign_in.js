import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signIn, clearAuthError } from '../actions';
import { renderInput } from '../helpers';

class SignIn extends Component {

    componentWillUnmount() {
        this.props.clearAuthError();
    }

    
    renderInput({input, label, type, meta: { error, touched } }) {
        return (
            <div>
                <label>{label}</label>
                <input {...input} type = { type ? type: "text"}/>
                <p className="red-text text-darken-2">{ touched && error }</p>
            </div>
        )
    }

    handleSignIn(values) {
        console.log('Sign up info: ', values);

        this.props.signIn(values);
    }

    render() {

        const { handleSubmit, authError } = this.props;

        return (
            <div className = "row">
                <div className="col s8 offset-s2">
                    <div className="card pink darken-2">
                        <div className="card-content">
                            <span className="card-title">Sign In</span>
                            <form onSubmit = {handleSubmit(this.handleSignIn.bind(this))}>
                                <Field name = "email" label = "Email" component = {renderInput}/>
                                <Field name = "password" label = "Password" component = {renderInput} type = "password"/>
                                <div className="row right-align">
                                    <button className = "btn blue darken-1">Sign In</button>
                                    <p className = "right-align white-text">{authError}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const { email, password, confirmPassword } = values;
    const errors = {};

    if (!email) {
        errors.email = "Please enter you email address"
    }

    if (!password) {
        errors.password = "Please choose a password."
    }

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);

function mapStateToProps(state) {
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps,  { signIn, clearAuthError })(SignIn);


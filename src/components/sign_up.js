import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signUp, clearAuthError } from '../actions';
import { renderInput } from '../helpers';

class SignUp extends Component {

    handleSignUp(values) {
        console.log('Sign up info: ', values);

        this.props.signUp(values);
    }

    componentWillMount() {
        this.props.clearAuthError;
    }

    render() {

        const { handleSubmit, authError } = this.props;

        return (
            <div className = "row">
                <div className="col s8 offset-s2">
                    <div className="card pink darken-2">
                        <div className="card-content">
                            <span className="card-title">Sign Up</span>
                            <form onSubmit = {handleSubmit(this.handleSignUp.bind(this))}>
                                <Field name = "email" label = "Email" component = {renderInput}/>
                                <Field name = "password" label = "Password" component = {renderInput} type = "password"/>
                                <Field name = "confirmPassword" label = "Confrim Password" component = {renderInput} type = "password"/>
                                <div className="row right-align">
                                    <button className = "btn blue darken-1">Sign Up</button>
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

    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do no match."
    }

    return errors;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

function mapStateToProps(state) {
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps,  { signUp, clearAuthError })(SignUp);


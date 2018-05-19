import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions'
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';


class Nav extends Component {

    renderLinks() {
        const { auth, changeAuth } = this.props;
        const btnStyle = {
            width: '131px'
        }
        if(auth) {
            return (
            <Fragment>
            <li>
                <Link to = "/secret_doc">Secret Docs</Link>
            </li>
            <li>
                <Link to = "/operative_list">Operatives List</Link>
            </li>
            <li>
                <button style = {btnStyle} className = "btn red darken" onClick = {() => changeAuth(false)}>Sign Out</button>
            </li>
            </Fragment>
            );
        }

        return <button style = {btnStyle} className = "btn grey" onClick = {() => changeAuth(true)}>Sign In</button>
    }

    render() {
        return (
            <nav className = "light-blue darken-3" style = {{padding: '0 12px'}}>
                <div className = "nav-wrapper">
                    <Link to = "/" className = "brand-logo">QHT DATA</Link>
                    <ul className = "right">
                        <li>
                            <Link to = "/">Home</Link>
                        </li>
                        <li>
                            <Link to = "/about">About</Link>
                        </li>
                       {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, { changeAuth: changeAuth })(Nav);
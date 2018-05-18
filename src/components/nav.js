import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <nav>
                <div className = "nav-wrapper">
                    <Link style = {{marginLeft: '10px'}} to = "/" className = "brand-logo">QHT DATA</Link>
                    <ul className = "right">
                        <li>
                            <Link to = "/">Home</Link>
                        </li>
                        <li>
                            <Link to = "/about">About</Link>
                        </li>
                        <li>
                            <Link to = "/secret_doc">Secret Docs</Link>
                        </li>
                        <li>
                            <Link to = "/operative_list">Operatives List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;
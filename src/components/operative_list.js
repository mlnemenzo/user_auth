import React from 'react';
import auth from '../hoc/auth';

const OpList = props => {
    return (
        <div>
            <h1 className = "center">Secret Operative List</h1>
            <ol>
                <li>Corey</li>
                <li>Samathy</li>
                <li>Steve</li>
                <li>George</li>
                <li>Your Mom</li>
            </ol>
        </div>
    )
}

export default auth(OpList);
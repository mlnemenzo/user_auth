import React from 'react';
import auth from '../hoc/auth';

const OpList = props => {
    return (
        <div>
            <h1 className = "center">Top Secret Document</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus consequuntur, nostrum optio aperiam quae 
                autem voluptatem officia sint dolorum, dicta cum. Similique laborum totam vero quaerat eligendi minima porro?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus consequuntur, nostrum optio aperiam quae 
                autem voluptatem officia sint dolorum, dicta cum. Similique laborum totam vero quaerat eligendi minima porro?</p>
        </div>
    )
}

export default auth(OpList);
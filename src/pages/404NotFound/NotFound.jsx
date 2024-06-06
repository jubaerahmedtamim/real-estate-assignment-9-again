import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className='text-center space-y-3 my-10'>
            <h1 className='text-5xl'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.data}</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default NotFound;
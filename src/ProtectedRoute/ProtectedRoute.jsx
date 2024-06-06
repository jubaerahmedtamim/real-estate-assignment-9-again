import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';

const ProtectedRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    const from = location.pathname;

    console.log(user, loading);

    if(loading){
        return <Spinner></Spinner>;
    }

    if(user){
        return children;
    }
    return <Navigate state={{from}} to='/login'></Navigate>
};

export default ProtectedRoute;
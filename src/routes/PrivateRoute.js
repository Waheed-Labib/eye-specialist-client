import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) return <Navigate to='/signin' state={{ from: location }} replace></Navigate>

    return (
        <>
            {children}
        </>

    );
};

export default PrivateRoute;
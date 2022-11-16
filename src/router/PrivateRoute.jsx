import { Navigate } from "react-router-dom";

export const PrivateRoute = ( { children }) => { 


    const logged = false;

    
    return (logged) 
    ? children 
    : <Navigate to='/'/> 

}   
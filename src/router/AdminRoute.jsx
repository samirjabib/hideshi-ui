import { Navigate } from "react-router-dom";

export const AdminRoute = ( { children }) => { 


    const logged = false;
    const user = 'admin'

    
    return (logged && user) 
    ? children 
    : <Navigate to='/dashboard'/> 

}   
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { AdminRoute } from './AdminRoute'
import { PublicRoute } from './PublicRoute';
import { Home } from '../home/pages';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
              
        </>
    );
};


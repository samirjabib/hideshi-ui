import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { Home } from '../home/pages';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/auth/*' element={ <AuthRoutes/>}/>
            </Routes>
              
        </>
    );
};


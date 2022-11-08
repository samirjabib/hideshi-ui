import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home.page';
import Register from '../pages/register.page';
import Login from '../pages/login.page';
import ProductDetail from '../pages/product-details.page';



const Routers = () => {
    return (
        <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    );
};

export default Routers;
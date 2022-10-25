import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home.page';



const Routers = () => {
    return (
        <Routes>
            <Route index path='/' element=<Home/>/>
        </Routes>
    );
};

export default Routers;
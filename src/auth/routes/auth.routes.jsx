
export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path = "login" element = { <LoginPage/>}/>
            <Route path = "register" element = { <RegisterPage/>}/>
        </Routes>
    );
};

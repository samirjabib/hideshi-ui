
const Header = () => {
    return (
        <header className="bg-red-500 h-40 flex flex-col justify-center border-4 border-black ">
            <img src="" alt="logo" className="bg-blue-300 w-40 self-center text-center relative bottom-4 border-4 border-black" />
            <nav className="bg-red-300 w-full flex justify-between h-16 p-4 border-4 border-black">
                <h2 className=" bg-red-700 self-center border-2 border-black">HIDESHI</h2> 
                <ul className="bg-red-70 flex items-center gap-4 border-4 border-black">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Register</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
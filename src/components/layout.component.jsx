import { Fragment } from "react";
import Routers from "../routes/routers";
import Footer from "./footer.component";
import Header from "./header.component";


const Layout = () => {
    return (
        <Fragment>
            <Header/>
            <Routers/>
            <Footer/>
        </Fragment>
    );
};

export default Layout;
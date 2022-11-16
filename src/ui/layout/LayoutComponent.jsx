import { Fragment } from "react";
import { AppRouter } from "../../router";
import { Footer, Header } from "../components";

export const Layout = () => {
    return (
        <Fragment>
            <Header/>
            <div className="mt-20">
                <AppRouter/>
            </div>
            <Footer/>
        </Fragment>
    );
};


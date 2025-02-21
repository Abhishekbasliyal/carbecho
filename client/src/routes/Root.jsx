import {Outlet} from "react-router-dom";
import Header from "../pages/Header/Header.jsx";
import Footer from "../pages/Footer/Footer.jsx";

export default function Root(){
    return(
        <>
            <div>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}


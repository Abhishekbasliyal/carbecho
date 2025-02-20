import {Outlet} from "react-router-dom";
import Header from "../pages/Header/Header.jsx";

export default function Root(){
    return(
        <>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </>
    )
}


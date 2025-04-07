import {Link, NavLink} from "react-router-dom";

export default function Header(){
    return (
        <>
            <header>
                <div className={"flex justify-between h-20 items-center px-24"}>
                    <Link to={"/"} className={"text-3xl font-bold text-[#4361EE]"}>CarBecho</Link>
                    <nav>
                        <ul className={"flex gap-10 item-center text-[18]"}>

                            <NavLink
                                to={"/"}
                                className={({isActive}) => `${isActive ? "text-[#4361EE]" : ""}`}
                            >Home</NavLink>

                            <NavLink
                                to={"/carlisting"}
                                className={({isActive}) => `${isActive ? "text-[#4361EE]" : ""}`}
                            >Car Listings</NavLink>

                            <NavLink
                                to={"/services"}
                                className={({isActive}) => `${isActive ? "text-[#4361EE]" : ""}`}
                            >Services</NavLink>

                            <NavLink
                                to={"/profile"}
                                className={({isActive}) => `${isActive ? "text-[#4361EE]" : ""} flex items-center gap-1`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                </svg>
                                <span>Profile</span>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";


const Rout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Rout;
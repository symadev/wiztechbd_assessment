import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = () => {

        const noHeaderFooter = location.pathname.includes('login') || 
                       location.pathname.includes('register')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default MainLayout;

import { Link } from "react-router-dom";
import logoSmall from "../../assets/images/Frame9.png";
import logoText from "../../assets/images/WiztecBD.png";

const Navbar = () => {
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully");
                navigate("/");
            })
            .catch((err) => toast.error("Logout failed"));
    };

    return (
        <div className="navbar bg-white font-semibold text-black px-4 sticky top-0 z-50 h-24 w-full">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
                    >
                        <li><a href="/">Buy</a></li>
                        <li><a href="#rent">Rent</a></li>
                        <li><a href="#Sells">Sell</a></li>
                        <li><a href="#agents">Agents</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contacts">Contact Us</a></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-1 ml-2">
                    <img className="w-8 h-8 object-cover" src={logoSmall} alt="Logo" />
                    <img className="w-20 h-auto object-cover" src={logoText} alt="Logo" />
                </div>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
                    <li><a href="/">Buy</a></li>
                    <li><a href="#rent">Rent</a></li>
                    <li><a href="#Sells">Sell</a></li>
                    <li><a href="#agents">Agents</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                    <li><a href="#contacts">Contact Us</a></li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                <Link
                    to="/login"
                    className="btn btn-outline bg-gradient-to-b from-[#340132] to-[#540a4f]  hover:bg-white text-white rounded-full shadow-lg"
                >
                    Login Now
                </Link>

            </div>
        </div>
    );
};

export default Navbar;

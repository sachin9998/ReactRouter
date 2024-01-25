import { Link } from "react-router-dom"
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';

function Navbar({ isLoggedIn, setIsLoggedIn }) {

    // let isLoggedIn = props.isLoggedIn;
    // let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to={"/"}>
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
            </Link>

            <nav className="text-slate-100 ">

                <ul className="flex gap-x-6">

                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>

                </ul>

            </nav>

            <div className="flex items-center gap-x-4">


                {
                    !isLoggedIn &&
                    <Link to="/login">
                            <button className="bg-slate-600 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-800">Log in</button>
                    </Link>
                }
                {
                    !isLoggedIn && <Link to="/signup">
                        <button className="bg-slate-600 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-800">Sign up</button>
                    </Link>
                }
                {
                    isLoggedIn && <Link to="/home">
                        <button className="bg-slate-600 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-800" onClick={() => {
                            setIsLoggedIn(false);
                            toast.success('Logged out!')
                        }}>Logout</button>
                    </Link>
                }
                {
                    isLoggedIn && <Link to="/dashboard">
                        <button className="bg-slate-600 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-800">Dashborad</button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar
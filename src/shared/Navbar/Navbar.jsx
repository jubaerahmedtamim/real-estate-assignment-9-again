import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, loading, logOut, setUser } = useContext(AuthContext);

    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
                toast.success("Logout successful.")
            })
            .catch((error) => {

            });
    }

    const navLinks = <>
        <li ><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/update-profile'>Update Profile</NavLink></li>
        <li><NavLink to='/user-profile'>User Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Domicile</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end tooltip tooltip-bottom"  data-tip={user?.displayName || "Not available"}>
                {
                    user
                        ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10  rounded-full" >
                                    <img alt="user profile picture" src={user?.photoURL && user.photoURL || ""} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                                {user && <div>
                                    <li><a>{user?.displayName || "Not available"}</a></li>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </div>
                                }
                            </ul>
                        </div>
                        :
                        <button className='btn'><Link to='/login'>login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;
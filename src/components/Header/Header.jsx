import "../../custom.css"
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (

        <div className="gradient">
            <div className="flex justify-between items-center max-w-[1380px] mx-auto">
                <div className="flex p-10">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-500 underline' : ''}>Statistics</NavLink>
                            <NavLink to="/appliedjobs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-500 underline' : ''}>Applied Jobs</NavLink>
                            <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-500 underline' : ''}>Blog</NavLink>
                        </ul>
                    </div>
                    <h2 className="text-3xl font-extrabold">CareerHub</h2>
                </div>
                <div className="navbar-center w-3/5 hidden lg:flex justify-between">
                    <ul className="menu menu-horizontal gap-10 px-1">
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-500 underline' : ''}>Statistics</NavLink>
                        <NavLink to="/appliedjobs" className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-500 underline' : ''}>Applied Jobs</NavLink>
                        <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-green-500 underline' : ''}>Blog</NavLink>
                    </ul>
                    <div className="">
                        <a className="btn btn-primary">Star Applying</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;
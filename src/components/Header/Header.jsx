import "../../custom.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="gradient py-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-extrabold">CareerHub</h2>
                    <div className="flex flex-row gap-10 ">
                        <NavLink to="/" className={({isActive, isPending})=>isPending?'pending':isActive?'text-green-500 underline':''}>Statistics</NavLink>
                        <NavLink to="/appliedjobs" className={({isActive, isPending})=>isPending?'pending':isActive?'text-green-500 underline':''}>Applied Jobs</NavLink>
                        <NavLink to='/blog' className={({isActive, isPending})=>isPending?'pending':isActive?'text-green-500 underline':''}>Blog</NavLink>
                    </div>
                    <button className="btn btn-primary">Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
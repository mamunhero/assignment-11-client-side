import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout()
    .then(result=> {
      console.log("user logout successfully", result);
    })
    .catch(error=> {
      console.log(error);
    })
  }
  const navItems = (
    <>
      <li className='mr-5'><Link to="/">Home</Link></li>
      <li className='mr-5'><Link to="/rooms">Rooms</Link></li>
     
     {
      user ? 
        <>
          <li className='mr-5'><Link to="/mybooking">My Booking</Link></li>
          <button onClick={handleLogout} className='mr-10 text-lg px-2 font-bold inline-block border-2 border-red-500 rounded-lg bg-red-500 text-white'>Sign Out</button>
        </>
      :
      <Link to="/login">
        <button className='mr-10 text-lg px-2 font-bold inline-block border-2 border-red-500 rounded-lg bg-red-500 text-white'>Login</button>
      </Link>
     }
    </>
  );

    


  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
          <img src="https://i.ibb.co/LRpznJb/travel-agency-logo-with-bag-vector-illustration-898026-780-48x48.webp" alt="logo" />
          <p className='text-2xl font-bold'>Heavenly<span className='text-[#E5BD43]'>Havens</span></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary">Booking Now</button>
      </div>
    </div>
  );
};

export default Navbar;









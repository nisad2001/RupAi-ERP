import { NavLink } from "react-router-dom";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to='/login'
          end
          className={
            ({ isActive }) =>
              isActive
                ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900 bg-transparent" // Active state
                : "bg-green-900 text-white hover:bg-green-800 rounded-md px-4 py-2 uppercase" // Normal state
          }
        >
          Log in
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='w-full bg-base-100 shadow-sm'>
      <div className='navbar max-w-7xl mx-auto'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <img src='/assets/Rupai-logo.png' alt='Logo' className='h-10' />
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow'
            >
              {nav}
            </ul>
          </div>
        </div>

        {/* <div className='navbar-center hidden lg:flex'>
          <img src='/assets/Rupai-logo.png' alt='Logo' className='h-12' />
        </div> */}

        <div className='navbar-end hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-2'>{nav}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

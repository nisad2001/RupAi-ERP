import { NavLink } from "react-router-dom";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to='/login'
          end
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Log in
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/two-factor'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Two Factor
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
            <img src='/assets/Rupai-logo.png' alt='' />
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow uppercase'
            >
              {nav}
            </ul>
          </div>
        </div>

        <div className='navbar-end hidden lg:flex '>
          <ul className='menu menu-horizontal px-1 uppercase'>{nav}</ul>
        </div>

        {/* <div className='navbar-end '>
          <NavLink
            to='/book'
            className='btn uppercase rounded-md bg-green-900 text-white border-none hover:bg-green-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm'
          >
            Log in
          </NavLink>
          <NavLink
            to='/book'
            className='btn uppercase rounded-md bg-green-900 text-white border-none hover:bg-green-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm'
          >
            Two Factor
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;

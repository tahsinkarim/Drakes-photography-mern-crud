import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className='shadow-md w-full z-20 relative'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div
            className='font-bold text-2xl cursor-pointer flex items-center
      text-gray-800'
          >
            <span className='text-3xl text-indigo-600 mr-1 pt-2'>Logo</span>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className='absolute right-8 top-6 cursor-pointer md:hidden'
          >
            {open ? (
              <FaTimes className='text-3xl'></FaTimes>
            ) : (
              <FaBars className='text-3xl'></FaBars>
            )}
          </div>

          <ul
            className={`hidden bg-gray-100 md:flex md:items-center md:pb-0 pb-12 absolute md:static z-10 md:bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className='md:ml-8 font-semibold md:my-0 my-7'
              >
                <Link
                  to={link.link}
                  className='text-gray-800 hover:text-gray-400 duration-500'
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {user?.uid && (
              <li>
                <img
                  title={user.displayName}
                  className='w-9 h-9 rounded-full mx-4'
                  src={user?.photoURL}
                  alt=''
                />
              </li>
            )}
            {user?.uid ? (
              <button
                onClick={handleLogout}
                className='px-4 py-2 ml-2 text-white font-medium rounded bg-indigo-600'
              >
                Log out
              </button>
            ) : (
              <Link
                className='px-4 py-2 ml-2 text-white font-medium rounded bg-indigo-600'
                to='/login'
              >
                Log in
              </Link>
            )}
          </ul>
        </div>
      </div>
      <ul
        className={`bg-gray-100 pb-12 absolute z-10 left-0 w-full pl-9 transition-all duration-500 ease-in ${
          open ? "top-20 " : "top-[-490px]"
        }`}
      >
        {Links.map((link) => (
          <li key={link.name} className='md:ml-8 font-semibold md:my-0 my-7'>
            <Link
              to={link.link}
              className='text-gray-800 hover:text-gray-400 duration-500'
            >
              {link.name}
            </Link>
          </li>
        ))}
        {user?.uid && (
          <li>
            <img
              title={user.displayName}
              className='w-9 h-9 rounded-full mx-4'
              src={user?.photoURL}
              alt=''
            />
          </li>
        )}
        {user?.uid ? (
          <button
            onClick={handleLogout}
            className='px-4 py-2 ml-2 text-white font-medium rounded bg-indigo-600'
          >
            Log out
          </button>
        ) : (
          <Link
            className='px-4 py-2 ml-2 text-white font-medium rounded bg-indigo-600'
            to='/login'
          >
            Log in
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Header;

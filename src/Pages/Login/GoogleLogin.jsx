import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const GoogleLogin = () => {
  const { providerLogin } = useContext(AuthContext);

  //Google pop up
  const googleProvider = new GoogleAuthProvider();

  // Get previous location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  //Google log in
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <hr className='my-8' />
      <button
        onClick={handleGoogleLogin}
        className='flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
      >
        <FaGoogle className='mr-2 text-lg'></FaGoogle>
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLogin;

import React, { useContext, useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  //Dynamic title
  const [title, setTitle] = useState("Login");
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Get previous location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoading(true);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        form.reset();
        setLoading(false);

        //Get jwt token
        fetch("https://server-photographer-tahsinkarim.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  if (loading) {
    return (
      <div className='flex justify-center'>
        <InfinitySpin width='200' color='#CA8A04' />
      </div>
    );
  }
  return (
    <div className='flex flex-col justify-center min-h-[60vh] py-12 px-4 bg-gray-50 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900 leading-9'>
          Sign in to your account
        </h2>
        <p className='mt-2 text-sm text-center text-gray-600 leading-5 max-w'>
          Or
          <Link
            to='/register'
            className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-2'
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit}>
            {error && <p className='text-red-500'>{error}</p>}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 leading-5'
              >
                Email address
              </label>

              <div className='mt-1 rounded-md shadow-sm'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required=''
                  autoFocus=''
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 '
                />
              </div>
            </div>

            <div className='mt-6'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 leading-5'
              >
                Password
              </label>

              <div className='mt-1 rounded-md shadow-sm'>
                <input
                  id='password'
                  type='password'
                  required=''
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 '
                />
              </div>
            </div>
            <div className='mt-6'>
              <span className='block w-full rounded-md shadow-sm'>
                <button
                  type='submit'
                  className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
                >
                  Sign in
                </button>
              </span>
            </div>
          </form>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;

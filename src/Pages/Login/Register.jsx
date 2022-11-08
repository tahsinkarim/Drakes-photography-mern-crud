import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import GoogleLogin from "./GoogleLogin";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    //Create a new user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdateInfo(name, photoURL);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });

    //Update name and photoURL
    const handleUpdateInfo = (name, photoURL) => {
      const data = {
        displayName: name,
        photoURL: photoURL,
      };
      updateUser(data)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    };
  };
  return (
    <div className='flex flex-col justify-center py-12 px-4 bg-gray-50 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900 leading-9'>
          Create a new account
        </h2>
        <p className='mt-2 text-sm text-center text-gray-600 leading-5 max-w'>
          Or
          <Link
            to='/login'
            className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-2'
          >
            Sign in
          </Link>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 leading-5'
              >
                Name
              </label>

              <div className='mt-1 rounded-md shadow-sm'>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 '
                />
              </div>
            </div>

            <div className='mt-6'>
              <label
                htmlFor='photoURL'
                className='block text-sm font-medium text-gray-700 leading-5'
              >
                Photo URL
              </label>

              <div className='mt-1 rounded-md shadow-sm'>
                <input
                  id='photoURL'
                  name='photoURL'
                  type='text'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 '
                />
              </div>
            </div>

            <div className='mt-6'>
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
                  required
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
                  required
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
                  Submit
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

export default Register;

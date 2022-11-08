import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();

  return (
    <div className='mx-auto max-w-7xl mb-16'>
      <h1 className='mt-10 text-4xl font-bold text-center text-slate-800'>
        Our Services
      </h1>
      <p className='mt-8 md:px-12 text-center text-lg'>
        Welcome to our photography studio! Our team offers a wide range of
        services throughout Los Angeles, perfect for any occasion. We specialize
        in wedding, engagement, family, and pet photography, and we also offer
        portrait sessions, headshots, and product photography. Our talented
        photographers will work with you to create beautiful photographs that
        you'll cherish forever.
      </p>
      <p className='text-center mt-4 mb-8 font-semibold'>
        Choose from a list of our services below
      </p>
      <div>
        {
          <div className='md:grid grid-cols-3 gap-4 mx-4'>
            {services.map((service) => (
              <div key={service._id}>
                <PhotoProvider>
                  <PhotoView src={service.img}>
                    <img
                      className='cursor-pointer'
                      src={service.img}
                      alt={service.title}
                    />
                  </PhotoView>
                </PhotoProvider>
                <h3 className='text-2xl font-semibold mt-6 underline'>
                  {service.title}
                </h3>
                <div className='mt-2 flex items-center gap-2 text-sm text-yellow-600 font-semibold'>
                  <FaStar />
                  <span>{service.rating}</span>
                </div>
                <p className='mt-2 text-gray-600'>{service.description}</p>
                <div className='my-3 flex items-center justify-between'>
                  <div>
                    <span className='text-yellow-600 font-semibold'>$</span>
                    <span className='text-2xl font-bold text-yellow-600'>
                      {service.price}
                    </span>
                  </div>
                  <Link
                    to={`/services/${service._id}`}
                    className='flex items-center px-2 py-1 round text-yellow-600 border-2 border-white hover:border-yellow-600 rounded mr-4'
                  >
                    <p className='font-semibold mr-1'>Details</p>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-5 h-5 mt-1'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Services;

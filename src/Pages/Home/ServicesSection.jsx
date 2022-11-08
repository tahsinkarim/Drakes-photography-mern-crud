import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  const textShort = (text) => {
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    }
  };

  useEffect(() => {
    fetch("https://server-photographer-tahsinkarim.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className='mt-16 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold text-center mb-4'>Our top picks</h1>
      <p className='text-center md:text-lg text-gray-600 mb-8'>
        Explore our services
      </p>
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
            <p className='mt-2 text-gray-600'>
              {textShort(service.description)}
            </p>
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
      <Link to='/services' className='flex justify-center w-full my-10'>
        <button className='flex items-center tracking-widest text-yellow-600 underline text-lg font-semibold'>
          See all services
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
        </button>
      </Link>
    </div>
  );
};

export default ServicesSection;
